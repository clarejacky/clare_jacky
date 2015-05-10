var express = require('express');
var app = express();

var path = require('path');
var days = require('./public/assets/scripts/days.js');

app.set('port', (process.env.PORT || 5000));

app.get('/project', function(request, response){
    response.sendFile(path.join(__dirname, './public/assets/scripts/days.js'));
    console.log("Hi");
});

app.get('/*', function(request, response){
    var file = request.params[0] || 'views/index.html';
    response.sendFile(path.join(__dirname, './public', file));

});


app.listen(app.get('port'), function (){
    console.log("App is running on port:", app.get('port'));
});

app.use('/project', days);