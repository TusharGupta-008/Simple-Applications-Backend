const app = require("./src/app.js");

app.get("/", (req, res) => {
  res.send("Hello World to my friend welcome ");
});

app.listen(3000, () => {
  console.log("Server is okkk");
});
