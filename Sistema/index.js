const express = require("express");
const app = express();
const mysql = require('mysql2');//isso pegara a versão mais atual do mysql que instalamos


const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"crudalunos",

})


app.get("/",(req, res)=>{
    let SQL = "INSERT INTO alunos (id,nome, idade) VALUES (null,'Maria','29')";
    db.query(SQL,(err,result)=>{
        console.log(err);
    });
})

app.listen(3001,()=>{
    console.log("rodando servidor");
});
