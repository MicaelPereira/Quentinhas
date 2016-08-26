module.exports = function(app){
    app.get('/cardapio', function(req, res){
    res.render("cardapios/lista");
    });
}
