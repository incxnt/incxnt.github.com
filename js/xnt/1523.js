var cloudmadeKey = 'e6e22dcc8e474b679084e83b0a0845fc';
var cloudmadeStyle = 22677;
var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/' + cloudmadeKey + '/' + cloudmadeStyle + '/256/{z}/{x}/{y}.png';
var cloudmadeMap = new L.tileLayer(cloudmadeUrl);

var mapCenter = new L.LatLng(26.099933, 119.296506); // Reflect the current province
var initZoom = 7;                                   // Reflect the proper zoom setting
var minZoom = 7;                                    // Reflect the proper zoom setting
var maxZoom = 7;                                    // Reflect the proper zoom setting
var map = new L.map('map', {
    attributionControl: false,
    center: mapCenter,
    zoom: initZoom,
    minZoom: minZoom,
    maxZoom: maxZoom,
    layers: [cloudmadeMap]
});

var geojson = L.geoJson(fujian, {                 // Reflect the location name
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
    this._div.innerHTML = '<h4>福建省</h4>' +  (props ?    // Reflect the province's Chinese name
        '<b>' + props.NAME_2 + '</b><br />'
        : '在地图上滑动鼠标获取信息');
};
info.addTo(map);


function getColor(id) {                                 // Color coding individually
    switch (id) {
            case 20: Color = '#E41A1C'; break;
            case 21: Color = '#377EB8'; break;
            case 22: Color = '#4DAF4A'; break;
            case 23: Color = '#984EA3'; break;
            case 24: Color = '#FF7F00'; break;
            case 25: Color = '#FFFF33'; break;
            case 26: Color = '#A65628'; break;
            case 27: Color = '#F781BF'; break;
            case 28: Color = '#999999'; break;
    }
    return Color;
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.ID_2),
        fillOpacity: 0.6,
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
