import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { db } from "./controllers/routes/index.ts";
import { appendFile } from "fs";


dotenv.config({ path: "/home/taller4O/ms_pweb/api-gateway/src/.env" });


const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Microservicio de Productos");
});


app.use("/productos", db);

app.listen(PORT, () => {
    console.log(`Microservicio de productos corriendo en el puerto ${PORT}`);
});