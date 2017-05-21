app.controller('mainCtrl', [ "$scope", function($scope) {
	var data;


	$scope.renderData = function() {
		$scope.data = data;
		$scope.render = true;
		$scope.$apply();
	}

	function readJSONFile(evt) {
		var file = evt.target.files[0];

		if (file) {
			var r = new FileReader();
			r.onload = function(e) {
				var contents = e.target.result;
				if (isValidJSON(contents)) {
					data = JSON.parse(contents);
					$scope.renderData(data);

				} else {
					alert("Invalid JSON Type")
				}

			}
			r.readAsText(file);
		} else {
			alert("Failed to load file");
		}
	}


	function isValidJSON(json) {
		var validJSON;
		try {
			JSON.parse(json)
			validJSON = true;
		} catch (error) {

			validJSON = false;
		}

		return validJSON;

	}

	document.getElementById('fileinput').addEventListener('change', readJSONFile, false);

} ]);
