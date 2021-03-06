//node package manager requirements 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//configure express to port 3000 localhost
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static(path.join(__dirname, 'app/public')));

app.post("/api/clear", function() {
    
    
    survey = [];

    console.log(survey);
    return [res.json(survey)];
});

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});