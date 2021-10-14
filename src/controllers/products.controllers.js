import { pool, VarChar } from 'mssql';
import {  getConnection,sql,querys} from '../database';

export const getProducts = async (req,res)=> {
    try {
        const pool = await  getConnection()
        const result = await pool.request().query(querys.getAllProducts)
        res.json(result.recordset)
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
};

export const createNewProduct = async(req,res)=>{
    const {codigo_producto,nombre_producto} = req.body
    let {estado} = req.body
    if(codigo_producto == null || nombre_producto == null){
        return res.status(400).json({msg:'porfavor llena los campos'})
    }
    if(estado==null) estado=true

    try {
        const pool = await getConnection()
         await pool.request()
            .input("p_codigo_producto",sql.VarChar(30),codigo_producto)
            .input("p_nombre_producto",sql.VarChar(100),nombre_producto)
            .input("p_estado",sql.Bit, estado)
            .query(querys.addNewProducts)
        res.json({codigo_producto,nombre_producto,estado})
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const getProductsById = async(req,res)=>{
    const {codProduct} = req.params
    const pool = await getConnection()
    const result = await pool.request()
    .input("p_codigo_producto",sql.VarChar(30),codProduct)
    .query(querys.getProductsId)
    res.send(result.recordset[0])
}
export const deleteProductsById = async(req,res)=>{
    const {codProduct} = req.params
    const pool = await getConnection()
    const result = await pool.request()
    .input("p_codigo_producto",sql.VarChar(30),codProduct)
    .query(querys.deleteProducts)
    res.json(result.rowsAffected[0])
}

export const getCountProductsAll = async(req,res)=>{
    const pool = await getConnection()
    const result = await pool.request()
    .query(querys.getCountProducts)
    res.json(result.recordset[0][''])
}

export const updateProductById = async(req,res)=>{
    const {nombre_producto,estado} = req.body
    const {codProduct} = req.params
    if(codProduct == null || nombre_producto == null || estado == null){
        return res.status(400).json({msg:'porfavor llena los campos'})
    }
    try {
        const pool = await getConnection()
         await pool.request()
            .input("p_codigo_producto",sql.VarChar(30),codProduct)
            .input("p_nombre_producto",sql.VarChar(100),nombre_producto)
            .input("p_estado",sql.Bit, estado)
            .query(querys.updateProducts)
        res.json({codProduct,nombre_producto,estado})
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}