var cloudmadeKey = 'e6e22dcc8e474b679084e83b0a0845fc';
var cloudmadeStyle = 22677;
var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/' + cloudmadeKey + '/' + cloudmadeStyle + '/256/{z}/{x}/{y}.png';
var cloudmadeMap = new L.tileLayer(cloudmadeUrl);

var mapCenter = new L.LatLng(41.835441, 123.42944);
var initZoom = 7;
var minZoom = 7;
var maxZoom = 7;
var map = new L.map('map', {
    attributionControl: false,
    center: mapCenter,
    zoom: initZoom,
    minZoom: minZoom,
    maxZoom: maxZoom,
    layers: [cloudmadeMap]
});

var geojson = L.geoJson(liaoning, {
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
    this._div.innerHTML = '<h4>辽宁省</h4>' +  (props ?
        '<b>' + props.NAME_2 + '</b><br />'
        : '在地图上滑动鼠标获取信息');
};
info.addTo(map);


function getColor(id) {
    switch (id) {
            case 196: Color = '#8DD3C7'; break;
            case 197: Color = '#FFFFB3'; break;
            case 198: Color = '#BEBADA'; break;
            case 199: Color = '#FB8072'; break;
            case 200: Color = '#80B1D3'; break;
            case 201: Color = '#FDB462'; break;
            case 202: Color = '#B3DE69'; break;
            case 203: Color = '#A65628'; break;
            case 204: Color = '#FFFF33'; break;
            case 205: Color = '#FF7F00'; break;
            case 206: Color = '#984EA3'; break;
            case 207: Color = '#4DAF4A'; break;
            case 208: Color = '#377EB8'; break;
    }
    return Color;
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.ID_2),
        fillOpacity: 0.5,
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
        fillOpacity: 0.7
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
