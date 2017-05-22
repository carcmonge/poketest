app.config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	$routeProvider
	.when('/', {
		templateUrl: '/pages/regions.html', 
		controller: 'regionCtrl'
	})
	.when('/pokemons/:region/:regionname', {
		templateUrl: '/pages/pokemons.html',
		controller:  'pokemonCtrl'
	})
	.otherwise({ redirectTo: '/' });
});