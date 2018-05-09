const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080;

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const router = require('./controllers/burgers_controller');
app.use('/', router);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});