var app = angular.module('appCortes', []);

app.controller('cortesCtrl', ['$scope','$http', function($scope,$http){

	$scope.cortes = [];
	
	console.log('Estoy utilizando angular de manera correcta!');

	$http.get('https://gobiernoabierto.cordoba.gob.ar/api/v2/cortes-de-transito/cortes-activos-geo/').then(function(res){
		var cortes = res.data.results.features;

		$scope.cortes = cortes;

		console.log(cortes);

	});	
}])