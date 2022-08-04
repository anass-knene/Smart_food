const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: "string", required: true },
  lastName: { type: "string", required: true },
  email: { type: "string", required: true },
  password: { type: "string", required: true },
  tel_Number: { type: "string" },
  city: { type: "string" },
  address: { type: "string" },
  //   todoList: [{ type: mongoose.Schema.Types.ObjectId, ref: "todoLists" }],
});
const userCollection = mongoose.model("users", userSchema);
module.exports = userCollection;
