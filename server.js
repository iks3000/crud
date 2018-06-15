var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(require('body-parser').urlencoded({ extended: true}));
app.use(bodyParser.json());

module.exports = function(app) {

    var records = require('./app/record.controller.js');

    // Create a new Record
    app.post('/api/records', records.create);

    // Retrieve all Record
    app.get('/api/records', records.findAll);

    // Retrieve a single Record by Id
    app.get('/api/records/:id', records.findOne);

    // Update a Record with Id
    app.put('/api/records/:id', records.update);

    // Delete a Record with Id
    app.delete('/api/records/:id', records.delete);
};
module.exports(app);


// Server
app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'), function(){
    console.log('Express is run on http://localhost:' + app.get('port') + '; press control + C to finish.');
});