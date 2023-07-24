const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    storeemail: String,
    storepassword: String,
    accounttype: String
});

module.exports = mongoose.model("users", userSchema);