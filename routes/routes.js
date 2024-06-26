import express from "express";
import {filtroByBody, filtroByOrder, hateOas, campoSelect, paginado, categoria}  from "../controllers/controllers.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hola Mundo!");
  });

router.get('/api/v2/body/:cuerpo',filtroByBody)
router.get('/api/v2/guitarras', filtroByOrder)//si quieres obtener toda la data, sólo coloca la ruta sin signos
router.get('/api/v1/guitarras',hateOas)
router.get('/api/v2/guitarra/:id', campoSelect)
router.get('/api/v3/guitarras',paginado);
router.get('/api/v2/guitarras/:categoria',categoria)

export default router;