var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/app/public')))

//DUE FEBRUARY 23

var htmlRoutes = require('./app/routing/html-routes');
app.use('/', htmlRoutes);

var apiRoutes = require('./app/routing/api-routes');
app.use('/api', apiRoutes);

app.listen(PORT, function() {
    console.log('Listening on Port' + PORT);
});