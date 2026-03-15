import express from 'express'
import morgan from 'morgan'

const app = express()

//* middlewares
app.use(express.json())
app.use(morgan("dev"))

export default app