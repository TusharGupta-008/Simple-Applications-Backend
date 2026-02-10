const mongoose = require("mongoose")

async function connectDb(params) {

  await mongoose.connect("URL")

  console.log("connected to DB")
  
}

module.exports = connectDb