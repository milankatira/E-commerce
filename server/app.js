const express = require("express");

const app = express();

const cookieParser=require("cookie-parser")

app.use(express.json());

app.use(cookieParser());

const errorMiddleware = require("./middleware/error");

const product = require("./routes/productRoute");

const user = require("./routes/userRoutes");

app.use("/api/v1", product);

app.use('/api/v1',user);

app.use(errorMiddleware);

module.exports = app;
