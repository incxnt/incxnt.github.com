var cloudmadeKey = 'e6e22dcc8e474b679084e83b0a0845fc';
var cloudmadeStyle = 22677;
var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/' + cloudmadeKey + '/' 
                    + cloudmadeStyle + '/256/{z}/{x}/{y}.png';
var cloudmadeMap = new L.tileLayer(cloudmadeUrl);

var mapCenter = new L.LatLng(40.25, 116.407526);
var initZoom = 8;
var minZoom = 8;
var maxZoom = 8;
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
    this._div.innerHTML = '<h4>Beijing</h4>';
};
info.addTo(map);



var beijingStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};
var beijing = L.geoJson(beijing, {
    style: beijingStyle,
    onEachFeature: onEachFeature
});
beijing.addTo(map);





function onEachFeature(feature, layer) {
    layer.bindPopup(feature.properties.NAME_3);
}
