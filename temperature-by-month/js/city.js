var svg = d3.select("body")
    .append("svg")
    .attr("width", "800")
    .attr("height", "600");

var timeScale = d3.scaleTime()
    .domain([new Date("January 1, 2018"), new Date("December 31, 2018")])
    .range([0, 800]);

var xAxis = d3.axisBottom(timeScale)
    .tickFormat(d3.timeFormat("%B"));

svg.append("g")
    .attr("transform", "translate(0, 400)")
    .call(xAxis);

var dataset = d3.csv("city-month.csv", function(data){
});