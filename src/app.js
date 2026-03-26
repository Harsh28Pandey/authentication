import express from 'express'
import morgan from 'morgan'
import authRouter from "./routes/auth.routes.js"

const app = express()

//* middlewares
app.use(express.json())
app.use(morgan("dev"))

//* routes
app.use("/api/auth", authRouter)

export default app