const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const path = require("path");
const homeRoute = require("./routes/index");
const chatRoute = require("./routes/chat");
const chatListRoute = require("./routes/chatlist");
const dateFilter = require("nunjucks-date-filter");

app.set("view engine", "html");

const PORT = 4000;
function setUpNunjucks(expressApp) {
  let env = nunjucks.configure("views/", {
    autoescape: true,
    express: expressApp,
  });
  //добавление новых фильтров
  env.addFilter("date", dateFilter);
}
setUpNunjucks(app);

app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/signin", (req, res) => {
  res.render("signin");
});
app.get("/page404", (req, res) => {
  res.render("page404");
});
app.get("/page500", (req, res) => {
  res.render("page500");
});
app.get("/user_settings", (req, res) => {
  res.render("user_settings");
});
app.use("/", homeRoute);
app.get("/chat", chatRoute);
app.get("/chatlist", chatListRoute);

app.use(express.static(__dirname + "/static"));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
