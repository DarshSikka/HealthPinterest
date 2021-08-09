// auth router
const User = require("../models/User");
const express = require("express");
const router = express.Router();
router.post("/signup", (req, res) => {
  console.log(req.body);
  const { username, password, email, name } = req.body;
  const usr = new User({ username, password, email, name });
  usr.save((err) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(usr);
      console.log(usr);
    }
  });
});
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username, password }, (err, result) => {
    if (!result) {
      res.send({ auth: false, msg: "User not found" });
    } else {
      res.send({
        auth: true,
        msg: `Logged in as ${result.email}`,
        token: result._id,
      });
    }
  });
});
module.exports = router;
