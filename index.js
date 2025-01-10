const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/index", (req, res) => {
  res.render("index.ejs");
});

app.get("/menu", (req, res) => {
  res.render("menu.ejs");
});

app.get("/about-us", (req, res) => {
  res.render("about.ejs");
});

app.get("/feedback", (req, res) => {
  res.render("feedback.ejs");
});

app.get("/store", (req, res) => {
  res.render("store.ejs");
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
