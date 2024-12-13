import mongoos from "mongoose";
import cors from "cors";
import express from "express";
import { test1 } from "./backend/controllers/alumno.controller.js";

dotenv.config()
mongoose.conect(process.env.urldb)
.then(()=>{
    console.long("funciona la base de datos")
})
.catch((error)=>{
    console.lag("No funciona ya salio", error)
})

const app=express();
app.use(corse());
app.liten(5003, ()=>{
    console.log("se escucha el servidor")
})
test1()