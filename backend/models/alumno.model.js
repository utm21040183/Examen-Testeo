import{Schema, modelo1}from "mongoose"

const Esquema1 = new Schema({
    name:{
        type:string
    }
})

export const modelo1 = new modelo1("tabla de alumnos", Esquema1)

