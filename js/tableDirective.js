app.directive('infoTable', function() {

	return {
		compile : function(tElement, tAttributes) {
			console.log("In compile");

			return {
				pre : function(scope, iElements, iAttributes) {
					console.log("In pre")
				},

				post : function(scope, iElements, iAttributes) {
					var keys = [];
					var data = scope.data;
					angular.forEach(data[0], function(value, key) {
						this.push(key);
					}, keys);
					scope.keys = keys;
					console.log("In post");
				}
			}
		},

		controller : function($scope, $element, $attrs) {
			console.log("In Controller");

		},

		scope : {
			data : '=data'
		},

		templateUrl : "views/tableDirectiveTemplate.html"
	};

});
