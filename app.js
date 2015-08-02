var express = require('express');
var app = express();

require('./config/routes.js')(app)

app.use(express.static(__dirname + '/public'));


app.set('view engine', 'ejs');



app.listen(process.env.PORT || 8080);