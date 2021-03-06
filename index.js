const express = require("express");
const mongoose = require("mongoose");
const app = express();
const posts = require("./routes/posts");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const User = require("./models/User");
const Auth = require("./routes/auth");
app.use(express.static("build"));
app.use("/auth", Auth);
app.use("/posts", posts);
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
