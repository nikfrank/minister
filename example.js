var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];

config.schemas = require('./schemas');
config.middleware = [];//require('./middleware');

var minister = require('./minister.js');

var app = minister(config, config.schemas, config.middleware);

var port = process.env.PORT||7890;
app.listen(port, function(){
  console.log("Express server listening on port "+port);
});
