const express = require("express");
const {API_VERSION} = require("./constants");
const bodyParser = require("body-parser");

const app = express();

//Import routings
//...

//Configure Body parse
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//Configure Header HTTP - Cors
//...


//Configure routings
//...

module.exports = app;