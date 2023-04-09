// Import the mongoose module
const mongoose = require("mongoose");
//dotenv is package for env
require("dotenv").config();

// Define the database URL to connect to.
const mongoDB = process.env.MONGO_URL; //for initialising the env variable

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log("Connected to db");
}
