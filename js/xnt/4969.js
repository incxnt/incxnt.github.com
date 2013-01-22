var jsonRectangles = [
    { "x_axis": 10, "y_axis": 10, "height": 20, "width":20, "color" : "green" },
    { "x_axis": 160, "y_axis": 40, "height": 20, "width":20, "color" : "purple" },
    { "x_axis": 70, "y_axis": 70, "height": 20, "width":20, "color" : "red" }];

var svgContainer = d3.select("#xnt-viz").append("svg")
    .attr("width", 200)
    .attr("height", 100);

var rectangles = svgContainer.selectAll("rect")
    .data(jsonRectangles)
    .enter()
    .append("rect");

var rectangleAttributes = rectangles
    .attr("x", function (d) { return d.x_axis; })
    .attr("y", function (d) { return d.y_axis; })
    .attr("height", function (d) { return d.height; })
    .attr("width", function (d) { return d.width; })
    .style("fill", function(d) { return d.color; });
