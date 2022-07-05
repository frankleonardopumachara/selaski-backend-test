import {NextFunction, Router} from 'express'
import {Request, Response} from 'express'
import {dbConnection} from '../connection'

export const ordersRouter = Router()

ordersRouter
    .get('/orders/:id', (req: Request, res: Response, next: NextFunction) => {
        const orderId = +req.params.id
        const sql = `SELECT *
                     FROM Orders
                     WHERE idOrder = ?`
        const values = [orderId]
        dbConnection.query(sql, values, (err, result: any) => {
            if (err) next(err)
            if (result && result.length) return res.json(result[0])
            res.sendStatus(404)
        })
    })
    .get('/orders', (req: Request, res: Response, next: NextFunction) => {
        const sql = `SELECT *
                     FROM Orders`
        dbConnection.query(sql, (err, result) => {
            if (err) next(err)
            res.json(result)
        })
    })
    .post('/orders', (req: Request, res: Response, next: NextFunction) => {
        const {idUser, orderNumber, dateTime, providerName, observation, totalValue} = req.body
        const sql = `INSERT INTO Orders (idUser, orderNumber, dateTime, providerName, observation,
                                         totalValue, status)
                     VALUES (?, ?, ?, ?, ?, ?, ?)`
        const values = [idUser, orderNumber, dateTime, providerName, observation, totalValue, true]
        dbConnection.query(sql, values, (err, result) => {
            if (err) next(err)
            res.json(result)
        })
    })
    .put('/orders/:id', (req: Request, res: Response, next: NextFunction) => {
        const orderId = +req.params.id
        const {idUser, orderNumber, dateTime, providerName, observation, totalValue} = req.body
        const sql = `UPDATE Orders
                     SET idUser = ?,
                         orderNumber  = ?,
                         dateTime     = ?,
                         providerName = ?,
                         observation  = ?,
                         totalValue   = ?
                     WHERE idOrder = ?`
        const values = [idUser, orderNumber, dateTime, providerName, observation, totalValue, orderId]
        dbConnection.query(sql, values, (err, result) => {
            if (err) next(err)
            res.json(result)
        })
    })
    .delete('/orders/:id', (req: Request, res: Response, next: NextFunction) => {
        const orderId = +req.params.id
        const sql = `DELETE
                     FROM Orders
                     WHERE idOrder = ?`
        const values = [orderId]
        dbConnection.query(sql, values, (err, result) => {
            if (err) return next(err)
            res.json(result)
        })
    })
