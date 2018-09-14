var margin = {top: 50, bottom: 100, right: 50, left: 100};
var width = 800;
var height = 600;
var svgWidth = width + margin.right + margin.left;
var svgHeight = height + margin.top + margin.bottom;

var svg = d3.select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
        .append("g")
            .attr("transform", "translate(" + 
                margin.left + "," + margin.top + ")");

var timeScale = d3.scaleTime()
    .domain([new Date("January 1, 2018"), new Date("December 1, 2018")])
    .range([0, 800]);

monthPosition = d3.scaleLinear()
    .domain([1,12])
    .range([0, 800]);

var yScale = d3.scaleLinear()
    .domain([75, 21])
    .range([ 0, height]);

var xAxis = d3.axisBottom(timeScale)
    .tickFormat(d3.timeFormat("%B"));

var yAxis = d3.axisLeft(yScale);

svg.append("g")
    .call(yAxis);

svg.append("g")
    .attr("transform", "translate(0, " +  height + ")")
    .call(xAxis);

var cityName = "honolulu";


var dataset = d3.csv("city-month.csv").then(function(data){
    console.log(data);
    var circles = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
        .attr("cx", function(d){
            return monthPosition(d.month);
        })
        .attr("cy", function(d){
            return yScale(d.honolulu);
        })
        .attr("r", "5");
});