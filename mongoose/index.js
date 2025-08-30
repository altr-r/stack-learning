const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const personScheam = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
  bio: String,
  single: Boolean,
});

const personModel = mongoose.model("Person", personScheam);

mongoose
  .connect("mongodb://127.0.0.1:27017/mongodemo")
  .then(async () => {
    console.log("Database Connected");
    const person = new personModel({
      firstName: "Arafat",
      lastName: "Rahman",
    });
    await person.save();
    console.log("Person Created");
    console.log(person);
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
