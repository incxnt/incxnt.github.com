var width = 960,
    height = 1160;

var svg = d3.select("#xntviz").append("svg")
        .attr("width", width)
        .attr("height", height);

var projection = d3.geo.albers()
                    .center([0, 55.4])
                    .rotate([4.4, 0])
                    .parallels([50, 60])
                    .scale(6000)
                    .translate([width / 2, height / 2]);

var path = d3.geo.path()
                .projection(projection);

d3.json("uk.json", function(error, uk) {
    svg.append("path")
        .datum(topojson.mesh(uk, uk.objects.subunits, function(a, b) { return a !== b && a.id !== "IRL"; }))
        .attr("d", path)
        .attr("class", "subunit-boundary");
    
    svg.append("path")
        .datum(topojson.mesh(uk, uk.objects.subunits, function(a, b) { return a === b && a.id === "IRL"; }))
        .attr("d", path)
        .attr("class", "subunit-boundary IRL");
});
