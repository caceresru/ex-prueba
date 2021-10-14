import {Router} from 'express'
import { createNewProduct, deleteProductsById, getCountProductsAll, getProducts, getProductsById, updateProductById } from '../controllers/products.controllers'
const router = Router()
router.get('/products',getProducts)
router.post('/products',createNewProduct)
router.get('/products/count',getCountProductsAll)
router.get('/products/:codProduct',getProductsById)
router.delete('/products/:codProduct',deleteProductsById)
router.put('/products/:codProduct',updateProductById)


export default router
