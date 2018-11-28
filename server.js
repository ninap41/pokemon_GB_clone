// require express
var express = require("express");
var path = require("path");
var session = require('express-session'); //added session goes here
var bodyParser = require('body-parser');
var app = express();
app.use('/favicon.ico', express.static('img/poke.ico'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));


app.use(session({secret: 'keep it secret keep it safe'})); //use session
app.set('views', path.join(__dirname, './views')); //set dependences
app.set('view engine', 'ejs');
var world = require('./world.js')
app.locals.c = {
    logged: false,
    play_options: {
        account: 'Login or Sign Up Account',
        no_account: 'Play without account'
    },
    title: "Poke'Der",
    instruction:  `
        <p>Welcome to PokeDer.  </p>
        <p>  It's pretty dumb.</p>
        <p>'s' search high grass</br> </br> arrows keys to movie</br> </br> 'spacebar' to inspect world</br> </br> 'e' to travel</p>
        <object type="application/x-shockwave-flash" width="180" height="25" class="vid" data="https://www.youtube.com/v/amQY--VS-d4?start=58&version=2&autoplay=1&enablejsapi=1&hd=1&theme=dark"><param name="movie" value="https://www.youtube.com/v/amQY--VS-d4?t=58version=2&autoplay=1&enablejsapi=1&hd=1&theme=dark" /><param name="wmode" value="transparent" /></object>
    `,

}
//ROUTES BEGIN ___________________________________________________________________________________

app.get('/', function(req, res) {
    res.render('index', { 
                c: app.locals.c,
            });
})

app.post('/login', function(req,res) {

})
app.get('/world_mod', function(req, res) {
    return res.json(world)  // module pass through ajax 
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});