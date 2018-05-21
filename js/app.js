var app = angular.module('appCortes', ['ngRoute']);

// app.service('Map', [function () {
	
// }]);

app.controller('mainCtrl', ['$scope', function($scope){
	$scope.menuSuperior = 'parciales/menu.html';
	$scope.titulo = 'Bienvenido';
}]);


app.controller('cortesCtrl', ['$scope','$http', function($scope,$http){

	$scope.cortes = [];
	
	console.log('Estoy utilizando angular de manera correcta!');

	$http.get('https://gobiernoabierto.cordoba.gob.ar/api/v2/cortes-de-transito/cortes-activos-geo/').then(function(res){
		var cortes = res.data.results.features;

		$scope.cortes = cortes;

		console.log(cortes);

	});	
}]);

app.controller('mapaCtrl', ['$scope','$http', function($scope, $http){

	$scope.titulo = 'Muestra de Mapa de cortes!';

	//Map.init();

	// $http.get('https://gobiernoabierto.cordoba.gob.ar/api/v2/cortes-de-transito/cortes-activos-geo/').then(function(res){
	// 	var cortes = res.data.results.features;

	// 	$scope.cortes = cortes;

	// 	console.log(cortes);

	// });	
	
}]);
