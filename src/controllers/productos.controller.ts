import connection from "../../db/configDB.ts";

export const getAllProducts = (req: any, res: any) => {
connection.connect(async()=>{
    const informacion = (await connection.promise().execute('SELECT * FROM producto'))[0];
    console.log(informacion)
    res.status(200).json({
        titulo: 'inventario',
        info: informacion
    })
})
};