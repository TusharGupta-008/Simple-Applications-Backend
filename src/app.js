const express = require("express");

const app = express();
app.use(express.json());
const notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "notes created sucess",
  });
});

app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes,
  });
});

app.delete('/notes/:index',(req,res)=>{
  const number = req.params.index;

  delete notes[number];

  res.status(200).json({
    message:"notes deleted succesfully"
  })
})

app.patch("/notes/:index", (req, res) => {
  const number = req.params.index;
  const content = req.body.description;

  notes[number].description = content;

  res.status(200).json({
    message: "note updated succesfully",
  });
});

module.exports = app;
