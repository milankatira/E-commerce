const express = require("express");

const app = express();

app.use(express.json());

const errorMiddleware = require("./middleware/error");

//rotes import
const product = require("./routes/productRoute");

app.use("/api/v1", product);

//error middleware
app.use(errorMiddleware);

module.exports = app;
