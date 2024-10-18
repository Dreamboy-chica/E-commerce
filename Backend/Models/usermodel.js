let mongoose = require("mongoose")

let usersch = new mongoose.Schema({
  "_id": String , //email-id
  "name": String,
  "pwd": String,
  "phno": String,
  "role": {
    type: String,
    default: "user",
  },
})

let userm = mongoose.model("user", usersch)

module.exports = userm
