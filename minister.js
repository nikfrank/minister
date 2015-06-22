var express = require('express');
var app = express();

module.exports = function(config, schemas, middleware){

    app.configure(function(){	
	app.set('view engine', 'ejs');
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());

// static middleware
	// angular options-call-babysitter middleware
	app.use(require('ops-babysit'));	
	// access control middleware
//	app.use(require('../server/middleware/access-control.js')(config));
	// fake cookie sessions, because fuck real cookies
	app.use(require('fake-cookie-session'));

	app.use(app.router);
    });




    // configure middlewares into arrays for each route

    // make a function to shit them out to the router

    var apiGrammar = ['verb', 'noun'];


    var nmw = function(req, res, next){
	req.blah = (req.blah||0) + 1;
	next();
    };

    var niw = {
	before:function(req, res, next){
	    
	},
	after:function(req, res, next){
	    
	}
    };

    // dynamic middleware
    var mwRouter = function(req, res, next){

	// rewrite as:::

	// loop through middleware collection
	// on match, bin by priority
	// as [priority:[{before, during, after, sufficiency}..], ..]
	
	var mws = [
	    {before:[], during:[], after:[], sufficient:0},
	    {before:[], during:[], after:[], sufficient:0},
	    {before:[], during:[], after:[], sufficient:0}
	];

	// flatten in order til sufficient

	var mwf = {
	    before:[nmw, nmw],
	    during:[],
	    after:[]
	};

	// pass the req and res through each middleware
	// give each a next function which calls the next middleware
	

	mws.forEach(function(mwp){
	    
	});



	// dep
	var co = middleware.dynamic; var i = 0;
	while(req.params[apiGrammar[i]]) co = co[req.params[apiGrammar[i++]]];
	return co;
    };

    // register routes

    // register schemas with middleware function
    app.post('/api/:verb/:noun', mwRouter, function(req, res){
	// call the db adapters
    });


    return app;
};
