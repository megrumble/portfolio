//DEPENDENCIES
const express    = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");

const skills     = require('../public/skills.json');
const projects   = require('../public/projects.json');

const app = express();

//ROUTES
app.get('/', (req, res) => {
     res.render("index", {skills, projects});
});

app.get('*', (req, res) => {
    res.redirect(301, "/") //Redirect all other GET routes to index '/'
});


module.exports = app; //Export for the server to use