const express = require("express");
const app = express();
const mongoose = require("mongoose");

const main = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/crud");
    console.log("mongoose connection success");
  } catch (err) {
    console.log(err);
  }
};
main();
mongoose.connection.on("error", (err) => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server Started at ${port}`));

app.get("/api", (req, res) => {
  res.send("Hello World");
});
