import { Router } from "express";
import { getAllProducts } from "../productos.controller.ts";

const ruta = Router();
ruta.get('/all', getAllProducts);
export default ruta;