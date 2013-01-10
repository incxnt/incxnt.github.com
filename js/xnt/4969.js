var data = [40, 20, 10];

var svg = d3.select("#xnt-viz").append("svg")
                                .attr("width", 600)
                                .attr("height", 100);

var circle = svg.selectAll("circle")
                .data(data)
                .enter()
                .append("circle")
                .attr("cx", 50)
                .attr("cy", 50)
                .attr("r", function (d) {return d;})
                .style("fill", "green");
