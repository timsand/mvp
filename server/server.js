const express = require("express");
const app = express();
const port = 3001;
const path = "/Users/tim/Desktop/mvp/public";
const db = require("..//db/index.js");

app.use(express.static(path));
app.use(express.json());

app.post("/save", (req, res) => {
  console.log(req.body);
  db.insertSaveData(req.body)
    .then(data => {
      console.log(data);
      res.end();
    })
    .catch(err => {
      console.log(err);
      res.status(404).send();
    });
});

app.listen(port, () => {
  console.log(`listening on ${port}...`);
});
