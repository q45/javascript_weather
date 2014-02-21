require.config({
	paths: {
		'jquery' : 'lib/jquery-1.10.1.min',
		'underscore' : 'lib/underscore',
		'backbone' : 'lib/backbone',
		'bootstrap' : 'lib/bootstrap'

	},

	shim: {
		'underscore' : {
			exports: '_'
		},
		'backbone' : {
			deps: [
						'underscore',
						'jquery'
			],
			exports: 'Backbone'
		},
		'bootstrap' : {
			deps: [
						'jquery'
			]
		}
	}
});


require([
	'backbone',
	'app/app'
	], function(Backbone, App) {
		'use strict';
		App.initialize();
		App.displayTime();
		console.log(App);
	});