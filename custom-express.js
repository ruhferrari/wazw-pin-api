var express = require("express");
var bodyParser = require('body-parser');

module.exports = function(){
	var app = express();
	app.use(bodyParser());
	require('./routes/location')(app);
	return app;
	};
