const Connection =require('tedious').Connection;
const Request = require('tedious').Request;
const config = require('../config')
const sql = require('mssql');

const dbconfig ={
    server: process.env.SQLSERVER_HOST,
    authentication:{
        type:'default',
        options:{
            userName:process.env.SQLSERVER_USER,
            password:process.env.SQLSERVER_PASSWORD,
            trustServerCertificate:true,
        },
    },
    options:{
        port:1433,
        database:process.env.SQLSERVER_DB,
        trustServerCertificate:true,
        encrypt: false
    }
};
const connection = new Connection(dbconfig);
connection.connect();
connection.on('connect',(err)=>{
    if(err){
        console.log("Error al conectarse a la base de datos");
        throw err;
    }
    executeStatement();
});

export async  function executeStatement(){
    try{
        const pool= await sql.connect(dbconfig);
        return pool;
    }catch(error){
        console.error(error);
    }
   
}

export {sql}