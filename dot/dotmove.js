var dataset = [31, 34, 54, 28, 37, 45, 48];

var svg = d3.select("body").append("svg")
    .attr("width", "800")
    .attr("height", "600");

svg.append("g")
    .append("text")
        .attr("class", "temperature")
        .text("temperature")
        .attr("x", "400")
        .attr("y", "300");

var i = 0;



var colorScale = d3.scaleLinear()
    .domain([28, 48])
    .range(["blue", "green"]);



d3.interval(function(){
    update(dataset);
}, 2000);

function update(dataset){
    if (i < dataset.length -1) { 
        i++;
    } else {
        i = 0;
    }

    var temperatureLabel = "temperature " +
        dataset[i];
    console.log(i + ", " + temperatureLabel);

    d3.select(".temperature")
        .remove();
    d3.select("circle").remove();

    svg.append("g")
    .append("circle")
        .attr("cx", "300")
        .attr("cy", "200")
        .attr("r", "100")
        .attr("fill", colorScale(dataset[i]));

    svg.select("g")
    .append("text")
        .attr("class", "temperature")
        .text(temperatureLabel)
        .attr("x", "400")
        .attr("y", "300");

    
}