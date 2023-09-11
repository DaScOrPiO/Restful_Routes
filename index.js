const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./models/name");

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`server Started at ${port}`));

// Post to database
app.post("/api", async (req, res, next) => {
  try {
    const { name } = req.body;
    const newPerson = new Person({ name: name });
    console.log(newPerson);
    await newPerson.save();
    res.status(200).json(newPerson);
  } catch (err) {
    res.send("Something went wrong");
    next();
  }
});

// Read single person
app.get("/api/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundPerson = await Person.findById(id);
    if (!foundPerson) {
      res.status(404).send("Person not found");
    }
    res.json(foundPerson);
  } catch (err) {
    next(err);
  }
});

// Update Person
app.patch("/api/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updateItem = await Person.findByIdAndUpdate(
      id,
      { name: name },
      { new: true }
    );
    console.log(updateItem);
    console.log(name);
    res.status(200).json(updateItem);
  } catch (err) {
    res.send(err);
    next(err);
  }
});

//Delete Person
app.delete("/api/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedItem = await Person.findByIdAndDelete(id);
    res.status(200).json(deletedItem);
  } catch (err) {
    next(err);
  }
});
