const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//mongoose.connect('mongodb+srv://rahul:rahul1234@mongodatabase.sb9mw.mongodb.net/onlineJobPortal?retryWrites=true&w=majority')
//mongoose.connect('mongodb+srv://rahul:<password>@cluster0.yoa22.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
//mongoose.connect('mongodb://localhost:27017/onlineJobPortal')

const adminSchema = new Schema({
    jobid: String,
    jobtitle: String,
    jobposteddate: String,
    jobrole: String,
    jobcompany: String,
    jobexperience: String,
    jobsalaryrange: String,
    jobnoofpositions: String,
    joblocation: String,
    jobskills: String,
    jobqualification: String,
    jobdegree: String,
    jobcompanyinfo: String,
    jobemploymenttype: String,
    jobindustrytype: String,
    jobsearchkeyword: String,
    jobdescription: String
});
module.exports = mongoose.model('admin', adminSchema, 'admin');