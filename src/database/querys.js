export const querys = {
    getAllProducts:'select * from t_producto',
    addNewProducts:'insert into t_producto(codigo_producto,nombre_producto,estado)values(@p_codigo_producto,@p_nombre_producto,@p_estado)',
    getProductsId:'select * from t_producto where codigo_producto = @p_codigo_producto',
    deleteProducts:'delete from t_producto where codigo_producto = @p_codigo_producto',
    updateProducts:'update t_producto set nombre_producto = @p_nombre_producto,estado=@p_estado where codigo_producto = @p_codigo_producto',
    getCountProducts:'select COUNT(*) from t_producto'
}