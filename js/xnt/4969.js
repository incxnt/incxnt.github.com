var svgContainer = d3.select("#xnt-viz").append("svg")
    .attr("width", 400)
    .attr("height", 100);

var axisScale = d3.scale.linear()
    .domain([0, 100])
    .range([0, 400]);

var xAxis = d3.svg.axis()
    .scale(axisScale);