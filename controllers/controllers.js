import {
  filtroByBodyQuery,
  filtroByOrderQuery,
  hateOasQuery,
  guitarra,
  campoSelectQuery,
  paginadoQuery,
  categoriasQuery
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
  const { id } = req.params;
  const { campo } = req.query;
  if (campo)
    return res.send({
      guitarra: campoSelectQuery(guitarra(id), campo.split(",")),
    });
  guitarra(id)
    ? res.send({ guitarra: guitarra(id) })
    : res.status(404).send({ error: "guitarra not found" });
};

//paginado
const paginado = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limite = parseInt(req.query.limite) || 10;
  if (page < 1)
    return res.status(400).send({ error: "La página debe ser mayor que 0" });
  if (limite < 1)
    return res.status(400).send({ error: "El límite debe ser mayor a 0" });
  const result = paginadoQuery(hateOasQuery, page, limite);
  res.send(result);
};

const categoria=(req,res)=>{
    const categoria= req.params.categoria
    const resultado=categoriasQuery(categoria);
    res.send({
        cantidad:resultado.length,
        guitarras: resultado
    })
}

export { filtroByBody, filtroByOrder, hateOas, campoSelect, paginado, categoria };
