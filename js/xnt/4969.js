var lineD = [
    {"x": 1, "y": 5},
    {"x": 20, "y": 20},
    {"x": 40, "y": 10},
    {"x": 60, "y": 40},
    {"x": 80, "y": 5},
    {"x": 100, "y": 60}
]
    
var lineF = d3.svg.line ()
                    .x (function (d) {return d.x;})
                    .y (function (d) {return d.y;})
                    .interpolate ("linear");

var svg = d3.select("#xnt-viz").append("svg")
                                .attr("width", 200)
                                .attr("height", 200);

var lineG = svg.append("path")
                .attr("d", lineF(lineD))
                .attr("stroke", "blue")
                .attr("stroke-width", 2)
                .attr("fill", "none");