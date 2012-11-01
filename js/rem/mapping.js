/* REM Map Version 1.01 */
var zoom = 13;
var maxZoom = 18;
var ggl = new L.Google();
var bng = new L.BingLayer(
	"AjLuUJvNNUSZBDz_xYPYy51rXL6hZMqaPbJQvwIf-CYHeL_sTxlGpZ-_bf67S9cv");
var datarent = new L.geoJson(datarent, {
	onEachFeature: onEachFeature
});
var datasale = new L.geoJson(datasale, {
	onEachFeature: onEachFeature
});
var baseMaps = {"交通地图": ggl, "航拍地图": bng};
var data = {"在售地产": datasale, "地产租赁": datarent};
var map = new L.map('map', {
	center: center, 
	zoom: zoom, 
	maxZoom: maxZoom,
	layers: [ggl, datasale]
});
var hash = new L.Hash(map);
L.control.layers(baseMaps, data).addTo(map);
function onEachFeature(feature, layer) {
	layer.bindPopup('<b><a target="_blank" title="欣赏相关图片" href="' + 
		feature.properties.photo + '">' + 
		feature.properties.address + '</a></b>' + ' ' +
		feature.properties.floor + ' ' +
		feature.properties.detail + ' ' +
		feature.properties.comment);
}
/* REM Map Version 1.01 */