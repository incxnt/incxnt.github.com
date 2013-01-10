var data = [1, 2, 3];

var p = d3.select("#xnt-viz")
            .selectAll("p")
            .data(data)
            .enter()
            .append("p")
            .text(function (d) {
                var addedNumber = 2;
                var result;
                result = d + addedNumber;
                return result;
            });