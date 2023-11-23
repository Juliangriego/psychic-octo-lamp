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

app.get("/muestra", (req, res)=>{
    db.query('SELECT * FROM detalle',(err, result)=>{
        if(err){
            console.log (err);
        }else{
            res.send(result);
        }
    });
});

app.post("/inserta",(req,res)=>{
    /*const articulo = req.body.articulo;
    const detalle = req.body.detalle;
    const observaciones = req.body.observaciones;
    
    const qInsert = 'INSERT INTO detalle (articulo, detalle, observaciones) VALUES (?, ? ,?)'
    db.query(qInsert, [articulo, detalle, observaciones],
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send("alumno registrado");
            }
        });*/
    req.map((x) => {
        const articulo = x.body.articulo;
        const cantidad = x.body.cantidad;
        const observaciones = x.body.observaciones;
    
        const qInsert = 'INSERT INTO detalle (articulo, cantidad, observaciones) VALUES (?, ? ,?)'
        db.query(qInsert, [articulo, cantidad, observaciones],
            (err,result)=>{
                if(err){
                    console.log(err);
                }else{
                    res.send("alumno registrado");
                }
            });
    }
        
    )

});

app.listen(3131, ()=>{
    console.log("Ejecutando backend en puerto 3131");
});