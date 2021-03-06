var cloudmadeKey = 'e6e22dcc8e474b679084e83b0a0845fc';
var cloudmadeStyle = 22677;
var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/' + cloudmadeKey + '/' + cloudmadeStyle + '/256/{z}/{x}/{y}.png';
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

var geojson = L.geoJson(beijing, {
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
    this._div.innerHTML = '<h4>北京市</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' +
        '面积: ' + props.area + ' 平方公里<br />' +
        '常住人口: ' + props.population
        : '在地图上滑动鼠标获取信息');
};
info.addTo(map);


function getColor(id) {
    switch (id) {
            case 78: Color = '#A6CEE3'; break;
            case 79: Color = '#1F78B4'; break;
            case 80: Color = '#B2DF8A'; break;
            case 81: Color = '#33A02C'; break;
            case 82: Color = '#FB9A99'; break;
            case 83: Color = '#E31A1C'; break;
            case 84: Color = '#FDBF6F'; break;
            case 85: Color = '#FF7F00'; break;
            case 86: Color = '#CAB2D6'; break;
            case 87: Color = '#6A3D9A'; break;
            case 88: Color = '#FFFF99'; break;      
    }
    return Color;
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.id),
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
