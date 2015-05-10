var express = require('express');
var app = express();

var path = require('path');
var daysUntilthirty = require('./daysUntilthirty');

app.set('port', (process.env.PORT || 5000));



app.get('/*', function(request, response){
    var file = request.params[0] || 'views/index.html';
    response.sendFile(path.join(__dirname, './public', file));
    daysUntilthirty();

});



app.listen(app.get('port'), function (){
    console.log("App is running on port:", app.get('port'));
});
