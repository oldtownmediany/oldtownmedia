
/**
 * Module dependencies.
 */

var express = require('express')
, routes = require('./routes')
, bodyParser = require('body-parser')
, methodOverride = require('method-override')
, serveStatic = require('serve-static')
, errorHandler = require('errorhandler')
, path = require('path');

var app = express(); //module.exports = express.createServer();

// Configuration

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(serveStatic(__dirname + '/public'));

// Routes

// app.get('/', routes.index);

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
});

// load errorHandler after routes

if (process.env.NODE_ENV !== "production") {
  app.use(errorHandler({ dumpExceptions: true, showStack: true }));
} else {
  app.use(errorHandler());
}


var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});
