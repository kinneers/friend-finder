var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/app/public')));

//Sets up app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Points server to route files
var htmlRoutes = require('./app/routing/html-routes');
app.use('/', htmlRoutes);
var apiRoutes = require('./app/routing/api-routes');
app.use('/api', apiRoutes);

//Server Listener
app.listen(PORT, function() {
    console.log('Listening on Port' + PORT);
});