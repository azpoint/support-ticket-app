const asyncHandler = require("express-async-handler")

//@route /api/users @Public
const registerUser = asyncHandler( async (req, res) => {
    const {name,email,password} = req.body

    //Validation
    if(!name || !email || !password) {
        res.status(400)
        throw new Error("Please include all fields")
    }

    res.send("Register User")
})

//@route /api/users/login @Public
const loginUser = asyncHandler(async (req, res) => {
    res.send("Login Route")
})

module.exports = {
    registerUser,
    loginUser
}