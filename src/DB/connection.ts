const { Sequelize } = require('sequelize');

const db=new Sequelize('ejemplo','root','sasa1234',{
    host:'localhost',
    dialect:'mysql',
 //   logging:false,
});

export default  db;