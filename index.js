const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./models/name");
const joi = require("joi");
const App_error = require("./App_error");

// Connect mongoose with database
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
// Parse requestbody via Json
app.use(bodyParser.json());
//Parse request body via forms
app.use(bodyParser.urlencoded({ extended: true }));

// Start Server
app.listen(port, () => console.log(`server Started at ${port}`));

// Validate items before saving to database
const validateRoutes = (req, res, next) => {
  const schema = joi
    .object({
      name: joi.string().required(),
    })
    .required();
  const { name } = req.body;
  const item_to_validate = schema.validate({ name });
  // if error exists
  if (item_to_validate.error) {
    const message = item_to_validate.error.details.map((el) => el.message);
    console.log(message);
    throw new App_error(message, 400);
  } else {
    next();
  }
};

// Post to database
app.post("/api", validateRoutes, async (req, res, next) => {
  try {
    const { name } = req.body;
    const findPerson = await Person.findOne({ name: name });
    if (findPerson) {
      res.status(200).json("Person already exists");
    } else {
      const newPerson = new Person({ name: name });
      console.log(newPerson);
      await newPerson.save();
      res.status(200).json(newPerson);
    }
  } catch (err) {
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
app.patch("/api/:id", validateRoutes, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updateItem = await Person.findByIdAndUpdate(
      id,
      { name: name },
      { new: true }
    );
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

// Error handling middleware
app.use((err, req, res, next) => {
  const { message = "Something went wrong", code = 500 } = err;
  res.status(code).json(message);
  console.log(code, message, err);
});
