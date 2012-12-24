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


var beijing;
var beijingStyle = {
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    color: '#F0FFFF',
    opacity: 1,
    weight: 2,
    dashArray: '5',
    clickable: false
};
beijing = L.geoJson(beijing, {
    style: beijingStyle
});
beijing.addTo(map);






function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}


function resetHighlight(e) {
    geojson.resetStyle(e.target);
}
