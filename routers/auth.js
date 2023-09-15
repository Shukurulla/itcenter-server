const express = require("express");
const router = express.Router();

router.post("/authorization", async (req, res) => {
  if (req.body.name === "" && req.body.password == "") {
    res.json({ err: "Iltimos malumotlarni toliq kiriting" });
  } else if (
    req.body.name === `${process.env.AUTH_NAME}` &&
    req.body.password === `${process.env.AUTH_PASSWORD}`
  ) {
      res.json({ msg: "Ro'yhatdan muaffaqqiyatli otdingiz" });
    } else {
      res.json({ err: "Malumotlar xato kiritildi" });
  }
});

module.exports = router;
