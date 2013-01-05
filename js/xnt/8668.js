var cloudmadeKey = 'e6e22dcc8e474b679084e83b0a0845fc';
var cloudmadeStyle = 22677;
var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/' + cloudmadeKey + '/' + cloudmadeStyle + '/256/{z}/{x}/{y}.png';
var cloudmadeMap = new L.tileLayer(cloudmadeUrl);

var mapquestUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png';   //map & sat & osm
var subDomains = ['otile1','otile2','otile3','otile4'];
var mapquestMap = new L.TileLayer(mapquestUrl, {subdomains: subDomains});


var mapCenter = new L.LatLng(24.700, 118.089425);
var initZoom = 0;
var minZoom = 0;
var maxZoom = 20;
var map = new L.map('map', {
    attributionControl: false,
    center: mapCenter,
    zoom: initZoom,
    minZoom: minZoom,
    maxZoom: maxZoom,
    layers: [mapquestMap]
});

L.tileLayer('http://{s}.tile.openweathermap.org/map/weather/{z}/{x}/{y}.png').addTo(map); // clouds

var validatorsLayer = new OsmJs.Weather.LeafletLayer({lang: 'en'}); 
map.addLayer(validatorsLayer);
