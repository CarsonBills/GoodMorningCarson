var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
require('./config/routes.js')(app)

app.use(express.static(__dirname + '/public'));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');




app.listen(8080);