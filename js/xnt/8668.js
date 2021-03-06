var cloudmadeKey = 'e6e22dcc8e474b679084e83b0a0845fc';
var cloudmadeStyle = 22677;
var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/' + cloudmadeKey + '/' + cloudmadeStyle + '/256/{z}/{x}/{y}.png';
var cloudmadeMap = new L.tileLayer(cloudmadeUrl);

var mapquestUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png';   //map & sat & osm
var subDomains = ['otile1','otile2','otile3','otile4'];
var mapquestMap = new L.TileLayer(mapquestUrl, {subdomains: subDomains});

var snow = L.tileLayer('http://{s}.tile.openweathermap.org/map/snow/{z}/{x}/{y}.png');
var rain = L.tileLayer('http://{s}.tile.openweathermap.org/map/rain/{z}/{x}/{y}.png');
var precipitation = L.tileLayer('http://{s}.tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png');
var clouds = L.tileLayer('http://{s}.tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png');
// var temp = L.tileLayer('http://{s}.tile.openweathermap.org/map/temp/{z}/{x}/{y}.png');

var mapCenter = new L.LatLng(35.86166, 104.195397);
var initZoom = 4;
var minZoom = 2;
var maxZoom = 6;
var map = new L.map('map', {
    attributionControl: false,
    center: mapCenter,
    zoom: initZoom,
    minZoom: minZoom,
    maxZoom: maxZoom,
    layers: [mapquestMap, clouds]
});

var info = L.control();
info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
info.update = function () { // props
    this._div.innerHTML = '<h4>实时气象地图</h4>';
};
info.addTo(map);

var overlayMaps = {
    "Cloud Cover": clouds,
    "Rain precipitation": rain,
    "Snow precipitation": snow,
    "Quantity of precipitation": precipitation
}

L.control.layers(null, overlayMaps).addTo(map);
