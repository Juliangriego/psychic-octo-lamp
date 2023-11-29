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

//Conexión
app.listen(3131, ()=>{
    console.log("Ejecutando backend en puerto 3131");
});

//Métodos HTML
app.get("/muestra", (req, res)=>{
    db.query('SELECT * FROM detalle',(err, result)=>{
        if(err){console.log (err);}else{res.send(result);}});});

        app.post("/ingresoDetalleOC", (req, res) => {
          const solicitante = req.body[0].solicitante;
          const qInsert = 'INSERT INTO solicitante (solicitante) VALUES (?)';
          db.query(qInsert, [solicitante], (err, result) => {
            if (err) {
              console.log(err);
            } else {
              // Ingresar el detalle
              req.body.map((x) => {
                const articulo = x.articulo;
                const cantidad = x.cantidad;
                const observaciones = x.observaciones;
                
                const qInsertDetalle = 'INSERT INTO detalle (articulo, cantidad, observaciones) VALUES (?, ?, ?)';
                db.query(qInsertDetalle, [articulo, cantidad, observaciones], (err, result) => {
                  if (err) {
                    console.log(err);
                  } else {
                    // Éxito al ingresar el detalle
                  }
                });
              });
            }
          });
        });
        

app.get("/obtenerDetalles", (req, res) => {
    const qSelect = 'SELECT * FROM detalle'; // Consulta para seleccionar todos los detalles
  
    db.query(qSelect, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error al obtener detalles");
      } else {
        // Enviar los detalles recuperados como respuesta
        res.status(200).json(result);
      }
    });
  });

  app.get("/obtenerSolicitante", (req, res) => {
    const qSelect = 'SELECT * FROM solicitante'; // Consulta para seleccionar todos los detalles
  
    db.query(qSelect, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error al obtener detalles");
      } else {
        // Enviar los detalles recuperados como respuesta
        res.status(200).json(result);
      }
    });
  });
  
  



