require.config({
	urlArgs: "bust=" + (new Date()).getTime(),

	paths: {
		"jquery": "vendor/jquery/jquery-min",
		"underscore": "vendor/underscore/underscore-min",
		"backbone": "vendor/backbone/backbone-min",
		"text": "vendor/require/text",
		"localstorage": "vendor/backbone/backbone.localStorage-min"
	}
});

require(['backbone', 'views/router'], function(Backbone, Router){

	new Router();
	Backbone.history.start();
});