var colors = ["blue", "green", "yellow", "orange", "red"];

var svg = d3.select("body").append("svg")
    .attr("width", "800")
    .attr("height", "400");


svg.append("circle")
    .attr("cx", "400")
    .attr("cy", "200")
    .attr("r", "50");

svg.append("text")
    .attr("x", "400")
    .attr("y", "300")
    .attr("text-anchor", "middle")
    .text("temperature");

var index = 0;

// main loop
d3.interval( update, 1000);

// function for main loop
function update(){
    svg.select("circle").remove();

    if (index >= colors.length - 1) {
        index = 0;
    } else {
        index++;
    }

    svg.append("circle")
    .attr("cx", "400")
    .attr("cy", "200")
    .attr("r", "50")
    .attr("fill", colors[index]);

    console.log(index);

}