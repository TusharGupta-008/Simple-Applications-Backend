const mongoose = require("mongoose")

async function connectDb(params) {

  await mongoose.connect("mongodb+srv://user-tushar:7sUwMDX2Bag1A3IS@cluster0.sgjjbia.mongodb.net/project-1")

  console.log("connected to DB")
  
}

module.exports = connectDb