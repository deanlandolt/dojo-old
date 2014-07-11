define([
	'intern!object',
	'dojo/_base/array',
	'dojo/dom-construct',
	'../support/query',
	'dojo/domReady!'
], function (registerSuite, array, domConstruct, querySupport) {
	domConstruct.place(querySupport.body , document.body);

	array.forEach(querySupport.engines.concat('unspecified'), function (engine) {
		var moduleId = 'dojo-testing/query';
		if (engine !== 'unspecified') {
			moduleId += '!' + engine;
		}

		require([ moduleId ], function (queryModule) {
			var suite = querySupport.generateScenarios(queryModule, engine);
			suite.name = 'dojo/query-' + engine;
			registerSuite(suite);
		});
	});
});