import {
  filtroByBodyQuery,
  filtroByOrderQuery,
  hateOasQuery,
  guitarra,
  campoSelectQuery,
} from "../queries/consultas.js";
const filtroByBody = (req, res) => {
  const { cuerpo } = req.params;
  res.send({
    cant: filtroByBodyQuery(cuerpo).length,
    guitarras: filtroByBodyQuery(cuerpo),
  });
};

const filtroByOrder = (req, res) => {
  const order = req.query.order; ///o {order}=req.query
  if (order === "asc") return res.send(filtroByOrderQuery(order));
  if (order === "desc") return res.send(filtroByOrderQuery(order));
};

const hateOas = (req, res) => {
  const result = hateOasQuery();
  res.send(result);
};

const campoSelect = (req, res) => {
  const {id} = req.params;
  const {campo} = req.query;
  if (campo)
    return res.send({
      guitarra: campoSelectQuery(guitarra(id), campo.split(",")),
    });
    guitarra(id)
    ? res.send({ guitarra: guitarra(id) })
    : res.status(404).send({ error: "guitarra not found" });
};


//paginado 
export { filtroByBody, filtroByOrder, hateOas, campoSelect };
