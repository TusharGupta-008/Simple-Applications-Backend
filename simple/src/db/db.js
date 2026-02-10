const mongoose = require('mongoose');

async function connectDB() {

  await mongoose.connect("URL")

  console.log('Connected to DB')
  
}

module.exports = connectDB