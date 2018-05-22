var app = angular.module('appCortes', ['ngRoute']);

app.service('Map', function () {
	
	this.init = function() {
		var uluru = {lat: -31.423871, lng: -64.179418};
        var options = {
            center: uluru,
            zoom: 14  
        }

	    this.map = new google.maps.Map(
	        document.getElementById("map"), options
	    );

	}

	this.dibujarCorte = function(Coords){
	
		var draw = new google.maps.Polygon({
			paths: Coords,
			strokeColor: '#FF0000',	
			strokeOpacity: 0.8,
			strokeWeight: 3,
			fillColor: '#FF0000',
			fillOpacity: 0.35
		});

		draw.setMap(this.map);
	}

	this.agregarMarcador = function(Coords){

		  var marker = new google.maps.Marker({
		      position: Coords,
		      map: this.map
		  });
	}    

});


app.controller('mainCtrl', ['$scope', function($scope){
	$scope.menuSuperior = 'parciales/menu.html';
	$scope.titulo = 'Bienvenido';
}]);


app.controller('cortesCtrl', ['$scope','$http', function($scope,$http){

	$scope.cortes = [];

	$http.get('https://gobiernoabierto.cordoba.gob.ar/api/v2/cortes-de-transito/cortes-activos-geo/').then(function(res){
		var cortes = res.data.results.features;

		$scope.cortes = cortes;

	});	
}]);

app.controller('mapaCtrl', ['$scope', 'Map', '$http', function($scope, Map, $http){

	$scope.titulo = 'Muestra de Mapa de cortes!';

	//Inicio el Mapa

	Map.init();
	

	//Servicio API Gobierno
	$http.get('https://gobiernoabierto.cordoba.gob.ar/api/v2/cortes-de-transito/cortes-activos-geo/').then(function(res){
	
	var cortes = res.data.results.features;


	// Recorrer los cortes y dibujar en mapa
	for(i = 0; i < cortes.length; i++){
		if(cortes[i].geometry !== null){
			
			var Coords = ltnlng(cortes[i].geometry.coordinates[0]) 


			//dibujo los cortes en el mapa
			Map.dibujarCorte(Coords);
			Map.agregarMarcador(Coords[0]);
		}
	}

	//Armo las coordenadas segun su latitud y longitud en formato json
	function ltnlng(Coords){
		var coordenadas = [];

		var total = Coords.length;

		for (c = 0 ; c < total ; c ++) {
			var longitud = Coords[c][0];
			var latitud = Coords[c][1];

			var latlng = {
				lng: longitud,
				lat: latitud
			}

			coordenadas.push(latlng);
		}

		return coordenadas;
	}
	
	});	
	
}]);
