var cloudmadeKey = 'e6e22dcc8e474b679084e83b0a0845fc';
var cloudmadeStyle = 22677;
var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/' + cloudmadeKey + '/' + cloudmadeStyle + '/256/{z}/{x}/{y}.png';
var cloudmadeMap = new L.tileLayer(cloudmadeUrl);

var mapCenter = new L.LatLng(33, 0);
var initZoom = 2;
var minZoom = 2;
var maxZoom = 6;
var map = new L.map('map', {
    attributionControl: false,
    center: mapCenter,
    zoom: initZoom,
    minZoom: minZoom,
    maxZoom: maxZoom,
    layers: [cloudmadeMap]
});

var info = L.control();
info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'map-info');
    this.update();
    return this._div;
};
info.update = function () {
    this._div.innerHTML = '<h4>Worldwide Airports</h4>';
};


var markers = new L.MarkerClusterGroup();
var airports = L.geoJson(airports);

markers.addLayer(airports);
marker.addTo(map);
info.addTo(map);
