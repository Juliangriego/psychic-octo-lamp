const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"127.0.0.1",
    user:"chu",
    password:"l0.DqgeWXkHHQQ5g",
    database:"proyecto1",
});

app.listen(3131, ()=>{
    console.log("Ejecutando backend en puerto 3131");
});

app.get("/muestra", (req, res)=>{
    db.query('SELECT * FROM detalle',(err, result)=>{
        if(err){console.log (err);}else{res.send(result);}});});

app.post("/inserta",(req,res)=>{
        req.body.map((x) => {
        const articulo = x.articulo;
        const cantidad = x.cantidad;
        const observaciones = x.observaciones;
        const qInsert = 'INSERT INTO detalle (articulo, cantidad, observaciones) VALUES (?, ? ,?)'
        db.query(qInsert, [articulo, cantidad, observaciones],
            (err,result)=>{
                if(err){
                    console.log(err);
                }else{
                    //res.send("alumno registrado");
}});})});



