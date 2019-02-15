
//Not sure if I need to require express here or export this file or what- I think we will cover that in class Saturday... I will try to figure it out if I have time between now and Saturday


// 3. Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
app.get('/survey', function(req, res) {
    res.sendFile(__dirname + '../public/survey.html');
});

//    * A default, catch-all route that leads to `home.html` which displays the home page.
app.get('/', function(req, res) {
    res.sendFile(__dirname + '../public/home.html');
});