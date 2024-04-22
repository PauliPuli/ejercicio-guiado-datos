import { guitarras } from "../data/guitarra.js";

const filtroByBodyQuery = (body) => {
  const result = guitarras.filter((guitarra) => guitarra.body === body);
  return result;
};

//consulta con evaluador ternario (como el if, "si es correcto, entonces  vamos al siguiente")Es para decidir qué valor retornará la función
const filtroByOrderQuery = (order) => {
  return order === "asc"
    ? guitarras.sort((a, b) => a.value - b.value)
    : order === "desc"
    ? guitarras.sort((a, b) => b.value - a.value)
    : false;
};

const hateOasQuery = () => {
  const consulta = guitarras.map((guitarra) => {
    return {
      id: guitarra.id,
      nombre: guitarra.nombre,
      href: `/api/v2/guitarra/${guitarra.id}`,
    };
  }); //guardamos el array de objetos cuando lo estemos iterando
  return {
    cantidad: consulta.length,
    results: consulta,
  };
};

const guitarra=(id)=>{
    return guitarras.find(guitarra=>guitarra.id === parseInt(id))
}

//filtrar por campo //trae los parámetros del objeto - si los campos no están elimínalos del campo
const campoSelectQuery = (guitarra, campo) => {
  for (const propiedad in guitarra) {
    if (!campo.includes(propiedad)) delete guitarra[propiedad];
  }
  return guitarra;
};

const paginadoQuery=(hateOasQuery, page, limite)=>{
const offset=(page-1)* limite;
return guitarras.slide(offset,offset+limite)
}

export { filtroByBodyQuery, filtroByOrderQuery, hateOasQuery, guitarra, campoSelectQuery, paginadoQuery };
