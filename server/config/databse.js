const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, 
    
    // {
    // //   useNewUrlParser: true,
    // //   useUnifiedTopology: true,
    // //   useCreateIndex: true,
    // } 
    
    )
    .then((data) => {
      console.log(`connected to ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
