var svg = d3.select("body").append("svg")
    .attr("width", "800")
    .attr("height", "600");

var x = 10;
var dx = 2;
var radius = 20;
var rotation = 0;

var timer = d3.timer(function(duration){
    svg.select("circle")
    .remove();

    svg.select("rect")
        .remove();
    svg.select("line")
        .remove();

    x = x + dx;
    if (x > 800 - radius){
        x = x - 2;
        dx = -dx;
    } else if (x < radius) {
        x = x + 2;
        dx = -dx;
    }

    svg.append("circle")
    .attr("cx", x)
    .attr("cy", "100")
    .attr("r", radius)
    .attr("fill", "MediumSpringGreen");

    if (rotation == 360) {
        rotation = 0;
    }
    rotation = rotation + 1;
    svg.append("rect")
        .attr("x", "50")
        .attr("y", "300")
        .attr("width", "40")
        .attr("height", "40")
        .attr("fill", "DeepSkyBlue")
        .attr("transform", "rotate(" + rotation + ", 70, 320)");

    svg.append("line")
        .attr("x1", "70")
        .attr("y1", "0")
        .attr("x2", "70")
        .attr("y2", "600")
        .attr("stroke", "gray")
        .attr("stroke-width", "1");

}, 100);
