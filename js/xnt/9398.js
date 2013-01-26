var width = 1000,
    height = 800;

var projection = d3.geo.mercator()
    .scale(6000)
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#xnt-box").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("china.json", function(error, china) {
    
    var chinaProvince = topojson.object(china, china.objects.chinaProvince);
    
    svg.append("path")
        .datum(chinaProvince)
        .attr("d", path);
    
});
