//Dependencies
const dotenv = require("dotenv").config();
const envConfig = require("./envConfig")
const express = require("express");
const colors = require("colors")
const { errorHandler } = require("./backend/middlewares/errorMiddleware");
const connectDB = require("./backend/db/config/db")

//Definitions
const app = express();
const PORT = envConfig.port
//Connect to database
connectDB()

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Middleware - Routes
app.use("/api/users", require("./backend/routers/userRoutes"));

app.use(errorHandler);

app.get("/", (req, res) => {
    res.status(200).send("Hello");
});

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
