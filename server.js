//DEPENDENCIES
const express    = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const routes     = require("./controller/routes.js");

let port = process.env.PORT || 3000; //Initialize port

//CONFIGURATION
//Express
const app = express();
app.use(express.static(__dirname + "/public"));

//Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Express-Handlebars
app.engine("handlebars", handlebars({ 
    defaultLayout: "main" 
}));
app.set("view engine", "handlebars");

//USE CONTROLLER ROUTES
app.use("/", routes);

//SERVER
app.listen(port, () => console.log("App running on port " + port));