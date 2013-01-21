var width = 960,
    height = 1160;

var svg = d3.select("#xntviz").append("svg")
        .attr("width", width)
        .attr("height", height);

d3.json("/data/uk.json", function(error, uk) {
    svg.append("path")
        .datum(topojson.object(uk, uk.objects.subunits))
        .attr("d", d3.geo.path().projection(d3.geo.mercator()));
});
