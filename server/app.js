const express = require("express");

const app = express();

const cookieParser = require("cookie-parser");

app.use(express.json());

app.use(cookieParser());

const bodyParser = require("body-parser");

const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middleware/error");

const product = require("./routes/productRoute");

const user = require("./routes/userRoutes");

const order = require("./routes/orderRoutes");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileUpload());

app.use("/api/v1", product);

app.use("/api/v1", user);

app.use("/api/v1", order);

app.use(errorMiddleware);

module.exports = app;
