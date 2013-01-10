var data = [30, 70, 110];

var svg = d3.select("#xnt-viz").append("svg")
                                .attr("width", 200)
                                .attr("height", 200);

var circle = svg.selectAll("circle")
                            .data(data)
                            .enter()
                            .append("circle")
                            .attr("cx", function (d) {return d;})
                            .attr("cy", function (d) {return d;})
                            .attr("r", 20)
                            .style("fill", function (d) {
                                var color;
                                switch (d) {
                                        case 30: color = "green"; break;
                                        case 70: color = "purple"; break;
                                        case 110: color = "red"; break;
                                }
                                return color;
                            });
