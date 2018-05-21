app.config(function ($routeProvider) {
	$routeProvider
	.when('/novedades', {
		templateUrl: 'novedades.html',
		controller: 'cortesCtrl'
	})
	.when('/mapa', {
		templateUrl: 'mapa.html',
		controller: 'mapaCtrl'
	})
	.otherwise({ redirectTo: '/novedades' });
});

