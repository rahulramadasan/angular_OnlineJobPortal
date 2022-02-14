const express = require('express');
var app = express();
var bodyparser = require('body-parser')
//fordata exchange
const cors = require('cors');
var api = require("./api");

//app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
app.use('/api', api);

app.listen(8080, () => {
    console.log("server started");
    console.log(__dirname);
});