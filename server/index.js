const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", function (req, res) {
  res.send("hello NodeJs");
});
app.listen(4000, () => console.log("4000번 포트 대기"));
