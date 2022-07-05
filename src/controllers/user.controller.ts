import {NextFunction, Router} from 'express'
import {Request, Response} from 'express'
import {dbConnection} from '../connection'

export const userRouter = Router()

userRouter.route('/users')
    .get((req: Request, res: Response, next: NextFunction) => {
        const sql = `SELECT * FROM User`
        dbConnection.query(sql, (err, result) =>  {
            if(err) next(err)
            res.json(result)
        })
    })
    .post((req: Request, res: Response, next: NextFunction) => {
        const {name, email} = req.body
        const sql = `INSERT INTO User (name, email, status)
                     VALUES (?, ?, ?)`
        const values = [name, email, true]
        dbConnection.query(sql, values, (err, result) => {
            if (err) next(err)
            res.json(result)
        })
    })
