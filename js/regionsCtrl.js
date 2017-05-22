app.controller('regionCtrl', ['$scope', '$rootScope','$http', function($scope, $rootScope, $http){

	$scope.changeLoading();
	$scope.load.loading = true;

	$http.get('http://pokeapi.co/api/v2/region')
	// $http.get('/regions.json')
	.then(function(response) {
		// Todo BIEN, la información viene en la respuesta.
		$scope.regions = response.data.results;

		angular.forEach($scope.regions, function(value, key) {
			var url = $scope.regions[key].url;
			var id = url.split("/");
			id = id[id.length - 2];
			$scope.regions[key]["id"] = id;
		});
	})
	.catch(function(response) {
		// Problemas con la peticion

	})
	.finally(function() {
		// Al terminar el THEN o CATCH
		$rootScope.load.loading = false;
	});
}]);
