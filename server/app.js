const express = require("express");
const cors = require("cors");
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

const payment = require("./routes/paymentRoute");

// const dotenv=require("dotenv");


// dotenv.config({ path: "server/config/config.env" });

const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileUpload());

app.use("/api/v1", product);

app.use("/api/v1", user);

app.use("/api/v1", order);

app.use("/api/v1", payment);

app.use(errorMiddleware);

module.exports = app;
