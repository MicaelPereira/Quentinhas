var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/cardapio', function(req, res){
    // res.send("<html><body><h1>Lista </h1></body></html>")
    res.render("cardapios/lista");
});

app.listen(3000, function(){
    console.log("Server node em pé");    
});

