import express from "express";

const app = express();

app.use(express.static("./public"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/new", (req, res) => {
  res.render("index");
});

app.listen(3000);

