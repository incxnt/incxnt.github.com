var cloudmadeKey = 'e6e22dcc8e474b679084e83b0a0845fc';
var cloudmadeStyle = 22677;
var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/' + cloudmadeKey + '/' + cloudmadeStyle + '/256/{z}/{x}/{y}.png';
var cloudmadeMap = new L.tileLayer(cloudmadeUrl);

var mapCenter = new L.LatLng(24.4800, 118.089425);
var initZoom = 10;
var minZoom = 10;
var maxZoom = 10;
var map = new L.map('map', {
    attributionControl: false,
    center: mapCenter,
    zoom: initZoom,
    minZoom: minZoom,
    maxZoom: maxZoom,
    layers: [cloudmadeMap]
});

var geojson = L.geoJson(xiamen, {
	style: style,
	onEachFeature: onEachFeature
}).addTo(map);

var info = L.control();
info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
info.update = function (props) {
    this._div.innerHTML = '<h4>厦门市</h4>' +  (props ?
        '<b>' + props.NAME_3 + '</b><br />'
        : '在地图上滑动鼠标获取信息');
};
info.addTo(map);


function getColor(id) {
    switch (id) {
            case 178: Color = '#E41A1C'; break;
            case 179: Color = '#377EB8'; break;
    }
    return Color;
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.ID_3),
        fillOpacity: 0.7,
        color: '#F0FFFF',
        opacity: 1,
        weight: 2,
        dashArray: '5'
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.9
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }

    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight
    });
}
