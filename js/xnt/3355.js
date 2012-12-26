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
    this._div.innerHTML = '<h4>Population Density</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.density + ' people / km<sup>2</sup>'
        : 'Hover over a province');
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
    return name = 'Beijing' ? '#A6CEE3' :
           name = 'Changping'  ? '#1F78B4' :
           name = 'Daxing'  ? '#B2DF8A' :
           name = 'Fangshan'  ? '#33A02C' :
           name = 'Huairou'   ? '#FB9A99' :
           name = 'Mentougou'   ? '#E31A1C' :
           name = 'Miyun'   ? '#FDBF6F' :
           name = 'Pinggu'  ? '#FF7F00' :
           name = 'Shunyi'  ? '#CAB2D6' :
           name = 'Tongzhou'    ? '#6A3D9A' :
                            '#FFFF99';
}


function style(feature) {
    return {
        fillColor: getColor(feature.properties.NAME_3),
        fillOpacity: 0.5,
        color: '#F0FFFF',
        opacity: 1,
        weight: 2,
        dashArray: '5',
        clickable: false
    };
}

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

    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}