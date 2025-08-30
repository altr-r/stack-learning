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
    const people = await personModel.find({ firstName: "Arafat" });
    console.log(people);
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
