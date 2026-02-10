const mongoose = require('mongoose');

async function connectDB() {

  await mongoose.connect("mongodb+srv://user-tushar:7sUwMDX2Bag1A3IS@cluster0.sgjjbia.mongodb.net/halley")

  console.log('Connected to DB')
  
}

module.exports = connectDB