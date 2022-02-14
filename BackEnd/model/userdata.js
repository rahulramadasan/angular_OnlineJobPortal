const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//mongoose.connect('mongodb+srv://rahul:rahul1234@mongodatabase.sb9mw.mongodb.net/onlineJobPortal?retryWrites=true&w=majority')
//mongoose.connect('mongodb+srv://rahul:<password>@cluster0.yoa22.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

const userSchema = new Schema({
    email: String,
    password: String
});

var userdata = mongoose.model('user', userSchema, 'users');
module.exports = userdata;
