const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    firstName: String,
    lastName : String,
    email: String,
    jobTitle: String,
    adress: String,
    url: String,
    userName: String,
    password: String
})

//export the module, the first parmeter is the module name, the sec is schema name, the last one is collection name in MLab
module.exports = mongoose.model('user', userSchema, 'users')