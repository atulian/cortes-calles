function initMap() {
  	//var latitud = -31.423871;
  	//var longitud = -64.179418;
    var uluru = {lat: -31.3887286785773, lng: -64.17845311444408};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: uluru
    });
    
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });


	dibujarCortes(map);

}

function dibujarCortes(map) {
	var Coords = [
          {lng: -64.17845311444408, lat: -31.3887286785773},
          {lng: -64.17842092793592, lat: -31.390972534747117},
          {lng: -64.17830291073959, lat: -31.391009168688957},
          {lng: -64.1783243684114,  lat: -31.388746995988104},
          {lng: -64.17845311444408, lat: -31.3887286785773}
        ];

        // Construct the polygon.
        var draw = new google.maps.Polygon({
          paths: Coords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });

        draw.setMap(map);
}

