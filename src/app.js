var app = require('./config/express.js')();
// var rotasCardapio = require('./routes/cardapio.js')(app);

app.listen(3000, function(){
    console.log("Server node em pé");    
});

