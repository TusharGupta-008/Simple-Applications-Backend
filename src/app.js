const express = require('express');

const app = express();
app.use(express.json())
const notes = [];

app.post('/notes',(req,res)=>{
  notes.push(req.body);

  res.status(201).json({
    message:"notes created sucess"
  })
})

app.get('/notes',(req,res)=>{
  res.status(200).json({
    notes:notes
  })


})

app.delete('/notes/:index',(req,res)=>{
  const number = req.params.index;

  delete notes[number];

  res.status(200).json({
    message:"notes deleted succesfully"
  })

  

  
})





module.exports = app;

