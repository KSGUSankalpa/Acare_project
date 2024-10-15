const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, unique: true }, // Ensure hospital name is unique
    hospitalId:{ type: String,unique: true},
    email: String,
    password: String,
    beds: Number
});

const Hospital = mongoose.model('Hospital_login', userSchema);
module.exports = Hospital;
