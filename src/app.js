const express = require('express');
const config = require('./config');
const Sequelize  = require('sequelize');
const contactos=require('./modulos/contactos/rutas');
const morgan = require('morgan');
//const error = require('./red/errors');
const cors = require('cors');
const sequelize = new Sequelize('ejemplo','root','sasa1234',{
    host:'localhost',
    dialect:'mysql'
})

//definimos el modelo
const contactosModel= sequelize.define('contactos',{
    "id":{type:Sequelize.INTEGER,primaryKey:true},
    "nombre": Sequelize.STRING,
    "nombre_empresa":Sequelize.STRING,
    "correo":Sequelize.STRING,
    "telefono":Sequelize.STRING,
    "categoria":Sequelize.STRING,
    "mensaje": Sequelize.STRING
})

sequelize.authenticate()
.then(()=>{
    console.log("Conexion a la base de datos OK")
})
.catch(error =>{
    console.log("EL ERROR DE CONEXION ES: " +error)
})

contactosModel.findAll({attributes:['nombre','nombre_empresa','categoria']})
.then(contactos=>{
    const resultados= JSON.stringify(contactos)
    console.log(resultados)
}).catch(error=>
    console.log(error)
)
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('port',config.app.port);

app.use('/api/contactos',contactos);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
module.exports = app;