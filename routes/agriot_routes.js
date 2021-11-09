const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/database.js');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Guardar datos de Sensor Kakao en DB con req.body.params
// router.post('/kakao',(req, res) => {
//   let data = {
//     temperatura: req.body.temperatura, 
//     humedad: req.body.humedad
//   };
//   let sql = "INSERT INTO sensor_kakao SET ?";
//   mysqlConnection.query(sql, data,(err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });

// Guardar datos de SensorKakao usando req.query.params
router.post('/sensor_data',(req, res) => {
  let data = {
    nodo_sensor1: req.body.nodo_sensor1, 
    nodo_sensor2: req.body.nodo_sensor2,
    nodo_sensor3: req.body.nodo_sensor3,
    nodo_sensor4: req.body.nodo_sensor4
  };
  let sql = "INSERT INTO sensors SET ?";
  mysqlConnection.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

// Obtener datos de Sensor Kakao desde DB
router.get('/sensor_data', (req, res) => {
  mysqlConnection.query('SELECT * FROM sensors', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});
  
module.exports = router;