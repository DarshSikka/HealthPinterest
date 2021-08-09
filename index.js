const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const User = require("./models/User");
const Auth = require("./routes/auth");
app.use(express.static("static"));
app.use("/auth", Auth);
require("dotenv").config();
mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, result) => {
    if (err) {
      return console.error(err);
    } else {
      console.log("Connected to database");
    }
  }
);
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send(req.query.msg || "Hello World");
});
app.listen(port, console.log(`listening on port ${port}`));
