//Dependencies
const express = require("express")

//Definitions
const apiRouter = express.Router()

//Controller
const { registerUser, loginUser, getMe } = require("../controllers/userController")

//Middlewares
const { protect } = require("../middlewares/authMiddleware")

//Router
apiRouter.post("/", registerUser)
apiRouter.post("/login", loginUser)
apiRouter.get("/me", protect, getMe)


module.exports = apiRouter