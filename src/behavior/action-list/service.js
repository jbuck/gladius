/*jshint white: false, strict: false, plusplus: false, onevar: false,
  nomen: false */
/*global define: false, console: false, window: false, setTimeout: false */

define( function ( require ) {

	return function( engine ) {

		var ActionList = engine.base.Service({
			type: 'behavior',
			schedule: {
				update: {
					phase: 'UPDATE',
					before: ['animation'],
					after: ['physics']
				}
			},
			time: engine.scheduler.simulationTime
		},
		function( options ) {

			var that = this;

			this.update = function() {
			};

		});

		return ActionList;

	};

});