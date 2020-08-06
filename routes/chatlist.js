const express = require("express");
const router = express.Router();

const { chats } = require("../data.js");

router.get("/chatlist", (req, res) => {
  res.render("chatlist", { chats: chats });
});

module.exports = router;
