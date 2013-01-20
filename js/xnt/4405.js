var cloudmadeKey = 'e6e22dcc8e474b679084e83b0a0845fc';
var cloudmadeStyle = 22677;
var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/' + cloudmadeKey + '/' + cloudmadeStyle + '/256/{z}/{x}/{y}.png';
var cloudmadeMap = new L.tileLayer(cloudmadeUrl);

var mapCenter = new L.LatLng(25.2, 118.675464); // Reflect the current province
var initZoom = 9;                                   // Reflect the proper zoom setting
var minZoom = 9;                                    // Reflect the proper zoom setting
var maxZoom = 9;                                    // Reflect the proper zoom setting
var map = new L.map('map', {
    attributionControl: false,
    center: mapCenter,
    zoom: initZoom,
    minZoom: minZoom,
    maxZoom: maxZoom,
    layers: [cloudmadeMap]
});

var geojson = L.geoJson(quanzhou, {                 // Reflect the location name
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
    this._div.innerHTML = '<h4>泉州市</h4>' +  (props ?    // Reflect the province's Chinese name
        '<b>' + props.NAME_3 + '</b><br />'
        : '在地图上滑动鼠标获取信息');
};
info.addTo(map);


function getColor(id) {                                 // Color coding individually
    switch (id) {
            case 158: Color = '#E41A1C'; break;
            case 159: Color = '#377EB8'; break;
            case 160: Color = '#4DAF4A'; break;
            case 161: Color = '#984EA3'; break;
            case 162: Color = '#FF7F00'; break;
            case 163: Color = '#FFFF33'; break;
            case 164: Color = '#A65628'; break;
            case 165: Color = '#F781BF'; break;
            case 166: Color = '#999999'; break;
    }
    return Color;
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.ID_3), // change the id accordingly
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
