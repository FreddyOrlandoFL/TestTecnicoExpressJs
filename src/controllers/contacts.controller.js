import { executeStatement,sql } from "../DB/mssqlserver";

export const getContacts = async (req,res)=> {
    const pool= await executeStatement();
    const result =await pool.request().query("SELECT TOP (1000) [id] ,[nombre] ,[nombre_empresa]   ,[correo] ,[telefono] ,[categoria] FROM [test].[dbo].[contactos]");
    console.log(result);
    res.json(result.recordset);
};

export const createNewContacts = async (req,res)=> {
    try{
        const { nombre,nombre_empresa,correo,telefono,categoria , mensaje } = req.body
    
        if(nombre == null || nombre_empresa == null  || correo == null  || telefono == null  || categoria == null  || mensaje == null){
            return res.status(400).json({
                msg:'Solicitud Incorrecta, Por favor rellena todos los campos'
            })
        }
    
        const pool = await executeStatement();
        await pool.request()
        .input("nombre",sql.VarChar,nombre)
        .input("nombre_empresa",sql.VarChar,nombre_empresa)
        .input("correo",sql.VarChar,correo)
        .input("telefono",sql.VarChar,telefono)
        .input("categoria",sql.VarChar,categoria)
        .input("mensaje",sql.VarChar,mensaje)
        .query('INSERT INTO test.dbo.contactos (nombre,nombre_empresa,correo,telefono,categoria,mensaje) VALUES (@nombre, @nombre_empresa, @correo, @telefono, @categoria, @mensaje)')
        
        
        console.log(nombre,nombre_empresa,correo,telefono,categoria , mensaje)
        res.json("new Contact");
    
    }catch(err){
        next(err);
      }
};
