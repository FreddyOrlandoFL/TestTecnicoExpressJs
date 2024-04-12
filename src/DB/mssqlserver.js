const Connection =require('tedious').Connection;
const Request = require('tedious').Request;

const config ={
    server: "LAPTOP-MEK3QTH4\SQLEXPRESS",
    authentication:{
        type:'default',
        options:{
            userName:"freddy",
            password:"freddy123"
        },
        options:{
            port:1433,
            database:'test',
            trustServerCertificate:true
        }
    }
};
const connection = new Connection(config);

connection.connect();
connection.on('connect',(err)=>{
    if(err){
        console.log("Error al conectarse a la base de datos");
        throw err;
    }
    executeStatement();
});

function executeStatement(){
    const request= new Request("SELECT 24/2",(err,rowCont)=>{
        if(err){
            throw err;
        }
        connection.close();

    });
    request.on('row',(columns)=>{
        console.log(columns);
    });
    connection.execSql(request);
}