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
    this._div.innerHTML = '<h4>Beijing</h4>' +  (props ?
        '<b>' + props.name + '</b><br />'
        : 'Hover over the map');
};
info.addTo(map);


/*
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = [];
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
    return div;
};
legend.addTo(map);
*/
    




function getColor(name) {
    switch (name) {
            case 'Beijing': Color = '#A6CEE3'; break;
            case 'Changping': Color = '#1F78B4'; break;
            case 'Daxing': Color = '#B2DF8A'; break;
            case 'Fangshan': Color = '#33A02C'; break;
            case 'Huairou': Color = '#FB9A99'; break;
            case 'Mentougou': Color = '#E31A1C'; break;
            case 'Miyun': Color = '#FDBF6F'; break;
            case 'Pinggu': Color = '#FF7F00'; break;
            case 'Shunyi': Color = '#CAB2D6'; break;
            case 'Tongzhou': Color = '#6A3D9A'; break;
            case 'Yanqing': Color = '#FFFF99'; break;      
    }
    return Color;
}


function style(feature) {
    return {
        fillColor: getColor(feature.properties.name),
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
