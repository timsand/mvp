const express = require("express");
const app = express();
const port = 3001;
const path = "/Users/tim/Desktop/mvp/public";

app.use(express.static(path));

app.listen(port, () => {
  console.log(`listening on ${port}...`);
});
