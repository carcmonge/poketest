var app = angular.module('poketest',['ngRoute']);

app.controller('mainCtrl', ['$scope', '$rootScope','$http', function($scope, $rootScope, $http){

	var load =  {
		'loading' : true,
		'messages' : [
			{'text' : 'Alimentando a los Pokemon...'},
			{'text' : 'Actualizando la Pokedex...'},
			{'text' : 'Ash perdiendo la liga... de nuevo'},
			{'text' : 'Cantando el rap de Pokemon...'},
			{'text' : 'Clonando a Mew...'},
			{'text' : 'Ganando la liga con Magikarp...'},
			{'text' : 'Esperando a que el equipo rocket sea vencido otra vez...'},
			{'text' : 'Preparense para los problemas...'},
			{'text' : 'Cargando rayo solar...'},
		],		
		'images' : [
			{'img' : '/images/loading/loading-1.gif'},
			{'img' : '/images/loading/loading-2.gif'},
			{'img' : '/images/loading/loading-3.gif'},
		],
		'message' : '',
		'img' : '',
	};

	$rootScope.load = load; 

	$scope.changeLoading = function(){
		var loadMSize = load.messages.map(function(v) {
			return Object.keys(v).length;
		}).length;	
		var loadISize = load.images.map(function(v) {
			return Object.keys(v).length;
		}).length;

		var numMRandom = Math.floor(Math.random() * loadMSize);
		var numIRandom = Math.floor(Math.random() * loadISize);

		$rootScope.load.message = $rootScope.load.messages[numMRandom];
		$rootScope.load.img = $rootScope.load.images[numIRandom];
	}

	$scope.changeLoading();

	$scope.teamT = "/pages/team.html";

}]);

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
