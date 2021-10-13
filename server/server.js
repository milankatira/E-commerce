const app = require("./app");

const dotenv = require("dotenv");

const connectDatabase=require("./config/databse")

dotenv.config({ path: "server/config/config.env" });

connectDatabase()
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
