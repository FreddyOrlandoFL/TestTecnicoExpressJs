require('dotenv').config();

module.exports = {
    app:{
        port: process.env.PORT || 4000 ,
    },
    mysql:{
        host:process.env.MYSQL_HOST || 'localhost', 
        user:process.env.MYSQL_USER || 'root', 
        password:process.env.MYSQL_PASSWORD || 'sasa1234', 
        database:process.env.MYSQL_DB || 'ejemplo', 
    },
    mssql:{
        host:process.env.SQLSERVER_HOST || 'localhost', 
        user:process.env.SQLSERVER_USER || 'sa', 
        password:process.env.SQLSERVER_PASSWORD || '12345678', 
        database:process.env.SQLSERVER_DB || 'test', 
    }
}