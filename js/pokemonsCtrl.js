app.controller('pokemonCtrl', ['$scope', '$rootScope','$http', '$routeParams', function($scope, $rootScope, $http, $routeParams){
	
	var region = $routeParams.region;
 	$scope.region = $routeParams.regionname;

	$scope.changeLoading();
	$scope.load.loading = true;

	$http.get('http://pokeapi.co/api/v2/pokedex/'+region)
	// $http.get('/data.json')
	.then(function(response) {
		// Todo BIEN, la información viene en la respuesta.
		$scope.pkregion = response.data.pokemon_entries;

		angular.forEach($scope.pkregion, function(value, key) {
			var url = $scope.pkregion[key].pokemon_species.url;
			var pokedex = url.split("/");
			pokedex = pokedex[pokedex.length - 2];
			$scope.pkregion[key].pokemon_species["pokedex"] = pokedex;
		});
	})
	.catch(function(response) {
		// Problemas con la peticion
	})
	.finally(function() {
		// Al terminar el THEN o CATCH
		$scope.load.loading = false;
	});

	$scope.team = [];

	$scope.addTeam = function(pokedex, name){
		var sizeTeam = $scope.team.length;

		if(sizeTeam <= 5)
		{
			$scope.team.push( {'name' : name, 'pokedex' : pokedex} );
			var toast = new Android_Toast({content: name+' fue añadido a tu equipo'});
		}
		else
		{
			var toast = new Android_Toast({content: 'No puedes llevar más de 6 Pokemon'});
		}
	}
	$scope.removeTeam = function(index, name){
		$scope.team.splice(index, 1);
		var toast = new Android_Toast({content: name+' fue eliminado de tu equipo'});
	}
}]);