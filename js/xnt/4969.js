var data = [
    { 
        "x_axis": 30,
        "y_axis": 30,
        "radius": 20,
        "color" : "green"
    }, {
        "x_axis": 70,
        "y_axis": 70,
        "radius": 20,
        "color" : "purple"
    }, {
        "x_axis": 110,
        "y_axis": 100,
        "radius": 20,
        "color" : "red"
    }
];

var svg = d3.select("#xnt-viz").append("svg")
                                .attr("width", 200)
                                .attr("height", 200);

var circle = svg.selectAll("circle")
                            .data(data)
                            .enter()
                            .append("circle")
                            .attr("cx", function (d) {return d.x_axis;})
                            .attr("cy", function (d) {return d.y_axis;})
                            .attr("r", function (d) {return d.radius;})
                            .style("fill", function (d) {return d.color;});
