const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

userSchema.methods.generateHash = (password) => {
    return  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

const User = mongoose.model("User", userSchema, "users");
module.exports = User;