const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const controllers = require("./controllers");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

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
app.post("/api", controllers.api);
app.post("/summoner", controllers.summoner);
app.post("/match", controllers.match);

app.listen(4000, () => console.log("4000번 포트 대기"));
