//Dependencies
const express = require("express")

//Definitions
const apiRouter = express.Router()

//Controller
const { registerUser, loginUser } = require("../controllers/userController")

//Router
apiRouter.post("/", registerUser)

apiRouter.post("/login", loginUser)


module.exports = apiRouter