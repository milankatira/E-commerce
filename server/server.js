const app = require("./app");

const dotenv = require("dotenv");

const connectDatabase = require("./config/databse");

//handling uncaught rejection

process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down server due to caught exception rejection`);
  server.close(() => {
    process.exit(1);
  });
});

dotenv.config({ path: "./config/config.env" });

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});

//unhandled promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
