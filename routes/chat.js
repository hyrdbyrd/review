const express = require("express");
const router = express.Router();
const { chats, messages } = require("../data.js");

router.get("/chat", (req, res) => {
  res.render("chat", {  chats: chats, messages:messages });
});

module.exports = router;
