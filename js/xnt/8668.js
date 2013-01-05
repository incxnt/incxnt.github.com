var cloudmadeKey = 'e6e22dcc8e474b679084e83b0a0845fc';
var cloudmadeStyle = 22677;
var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/' + cloudmadeKey + '/' + cloudmadeStyle + '/256/{z}/{x}/{y}.png';
var cloudmadeMap = new L.tileLayer(cloudmadeUrl);

var mapquestUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png';   //map & sat & osm
var subDomains = ['otile1','otile2','otile3','otile4'];
var mapquestMap = new L.TileLayer(mapquestUrl, {subdomains: subDomains});


var mapCenter = new L.LatLng(35.86166, 104.195397);
var initZoom = 4;
var minZoom = 2;
var maxZoom = 4;
var map = new L.map('map', {
    attributionControl: false,
    center: mapCenter,
    zoom: initZoom,
    minZoom: minZoom,
    maxZoom: maxZoom,
    layers: [mapquestMap]
});

var info = L.control();
info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
info.update = function (props) {
    this._div.innerHTML = '<h4>实时天气地图</h4>';
};
info.addTo(map);

L.tileLayer('http://{s}.tile.openweathermap.org/map/snow/{z}/{x}/{y}.png').addTo(map); // clouds snow rain precipitation
