var dataset = [1200, 343, 256, 822, 745, 926, 2336];

var margin = {top: 100, bottom: 100, right: 100, left: 50};
var width = 800;
var height = 600;
var svgWidth = 800 + margin.right + margin.left;
var svgHeight = 600 + margin.top + margin.bottom;

var svg = d3.select("body").append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .append("g")
        .attr("transform", "translate(" + margin.right +
            "," + margin.top + ")");

var xScale = d3.scaleLinear()
    .domain([0, 2336])
    .range([0, width]);

var yScale = d3.scaleLinear()
    .domain([0,10])
    .range([height, 0]);

svg.append("g")
    .call(d3.axisBottom(xScale))
        .attr("transform", "translate(0, " +
            height + ")")
    .selectAll("text")
        .attr("class", "xAxis")
        .attr("transform", "translate(0, 4)");


svg.append("g")
    .call(d3.axisLeft(yScale))
    .selectAll("text")
        .attr("class", "yAxis");

svg.append("g")
    .append("text")
        .text("Distance")
        .attr("x", width/2)
        .attr("y", height + 60)