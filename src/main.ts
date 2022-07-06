import express from 'express'
import {Request, Response} from 'express'
import {userRouter} from './controllers/user.controller'
import {ordersRouter} from './controllers/order.controller'
import {productsRouter} from './controllers/product.controller'
import cors from 'cors'
import {errorHandler} from './middlewares/error-handling.mw'

// setup app
const app = express()
app.use(cors())
app.use(express.json())

// setup routes
app.use('/api/v1', userRouter)
app.use('/api/v1', ordersRouter)
app.use('/api/v1', productsRouter)

// error handling
app.use(errorHandler)

// for cloud services check system
app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Selaski!')
})

const port: string = process.env.PORT
app.listen(port, () => {
    console.log(`server running: http://localhost:${port}`)
})
