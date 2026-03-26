import userModel from "../models/user.model.js"
import crypto from "crypto"
import jwt from "jsonwebtoken"
import config from "../config/config.js"

export const register = async (req, res) => {
    const { username, email, password } = req.body
    const isAlreadyRegistered = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isAlreadyRegistered) {
        res.status(409).json({
            message: "Username or email already exists"
        })
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex")

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword
    })

    const token = jwt.sign({
        id: user._id
    }, config.JWT_SECRET, { expiresIn: "1d" })

    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        },
        token
    })
}

export const getMe = async (req, res) => {
    const token = req.headers.authorization.split(" ")[1]

    if (!token) {
        return res.status(401).json({
            message: "Token not found"
        })
    }

    const decoded = jwt.verify(token, config.JWT_SECRET)

    // console.log(decoded)

    const user = await userModel.findById(decoded.id)

    res.status(200).json({
        message: "User fetched successfully",
        user: {
            username: user.username,
            email: user.email
        }
    })
}