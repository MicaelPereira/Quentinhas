// var dbConnection = require('../infra/dbConnection');


module.exports = function(app){
    app.get('/cardapio', function(req, res){
        // var connection = app.infra.dbConnection(); 
        
        res.send(results);

        // connection.query('select * from Cardapio', function(err, results){
        //     res.send(results);
        // });
        // connection.end();
        
        
        res.render("cardapios/lista");
    });
}
