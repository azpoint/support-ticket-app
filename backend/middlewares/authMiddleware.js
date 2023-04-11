// Dependencies
const envConfig = require("../../envConfig");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

//Database
const User = require("../db/models/userModel");

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            //Get token from header
            token = req.headers.authorization.split(" ")[1];

            //Verify the token
            const decoded = jwt.verify(token, envConfig.jwt_secret);

            //Get user from token but not password from MONGODB
            req.user = await User.findById(decoded.id).select("-password");

            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("Not authorized");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("Not authorized");
    }
});


module.exports = {protect}