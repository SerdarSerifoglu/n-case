const express = require("express");
const app = express();

app.use(express.static(__dirname + "/"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/search.html");
});
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
