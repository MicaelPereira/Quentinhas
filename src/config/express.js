var express = require('express');
var load = require('express-load');



module.exports = function(){
    var app = express();
    app.set('view engine', 'ejs');

    load('routes', {cwd:'src'})
        .then('infra')
        .into(app);
    return app;
}

