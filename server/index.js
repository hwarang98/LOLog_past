const express = require("express");
const cors = require("cors");
const app = express();
const controllers = require("./controllers");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

app.get("/", function (req, res) {
  res.send("hello NodeJs");
});

app.get("/api", controllers.api);

app.listen(4000, () => console.log("4000번 포트 대기"));
