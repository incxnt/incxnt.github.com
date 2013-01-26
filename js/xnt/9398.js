var width = 960,
    height = 700;

var projection = d3.geo.mercator()
    .center([104.195397, 35.86166])
    .scale(5000)
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#xnt-box").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("china.json", function(error, china) {
    
    var chinaProvince = topojson.object(china, china.objects.chinaProvince);
    /*
    svg.append("path")
        .datum(chinaProvince)
        .attr("d", path);
    */
    
    svg.selectAll(".chinaProvince")
        .data(chinaProvince.geometries)
        .enter()
        .append("path")
        .attr("class", function(d) {return "chinaProvince " + d.id;})
        .attr("d", path);
    
});
