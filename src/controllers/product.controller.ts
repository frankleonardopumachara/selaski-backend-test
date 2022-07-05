import {NextFunction, Router} from 'express'
import {Request, Response} from 'express'
import {dbConnection} from '../connection'

export const productsRouter = Router()

productsRouter
    .get('/products/order/:orderId', (req: Request, res: Response, next: NextFunction) => {
        const orderId = +req.params.orderId
        const sql = `SELECT *
                     FROM OrdersProducts
                     WHERE idOrder = ?`
        const values = [orderId]
        dbConnection.query(sql, values, (err, result) => {
            if (err) next(err)
            res.json(result)
        })
    })
    .get('/products', (req: Request, res: Response, next: NextFunction) => {
        const sql = `SELECT *
                     FROM OrdersProducts`
        dbConnection.query(sql, (err, result) => {
            if (err) next(err)
            res.json(result)
        })
    })
    .post('/products', (req: Request, res: Response, next: NextFunction) => {
        const {idOrder, valueUnit, unit, description, sku, quantity, qtyBox, weight, volumen, mark} = req.body
        const sql = `INSERT INTO OrdersProducts (idOrder, valueUnit, unit, description, sku, quantity, qtyBox, weight,
                                                 volumen,
                                                 mark, status)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        const values = [idOrder, valueUnit, unit, description, sku, quantity, qtyBox, weight, volumen, mark, true]
        dbConnection.query(sql, values, (err, result) => {
            if (err) next(err)
            res.json(result)
        })
    })
    .put('/products/:id', (req: Request, res: Response, next: NextFunction) => {
        const orderId = +req.params.id
        const {valueUnit, unit, description, sku, quantity, qtyBox, weight, volumen, mark} = req.body
        const sql = `UPDATE OrdersProducts
                     SET valueUnit   = ?,
                         unit        = ?,
                         description = ?,
                         sku         = ?,
                         quantity    = ?,
                         qtyBox      = ?,
                         weight      = ?,
                         volumen     = ?,
                         mark        = ?
                     WHERE idOrdersProducts = ?`
        const values = [valueUnit, unit, description, sku, quantity, qtyBox, weight, volumen, mark, orderId]
        dbConnection.query(sql, values, (err, result) => {
            if (err) next(err)
            res.json(result)
        })
    })
    .delete('/products/:id', (req: Request, res: Response, next: NextFunction) => {
        const orderId = +req.params.id
        const sql = `DELETE FROM OrdersProducts 
                     WHERE idOrdersProducts = ?`
        const values = [orderId]
        dbConnection.query(sql, values, (err, result) => {
            if (err) return next(err)
            res.json(result)
        })
    })
