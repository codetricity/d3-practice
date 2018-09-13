var colors = ["blue", "green", "yellow", "orange", "red"];

// average low january temperature in F. 
var temperatureData = [
    {city: "San Francisco", lowTemp: 46},
    {city: "San Jose", lowTemp: 42},
    {city: "Washington, DC", lowTemp: 29},
    {city: "Portland, Oregon", lowTemp: 36},
    {city: "Orlando, Florida", lowTemp: 49},
    {city: "Seattle, Washington", lowTemp: 37},
    {city: "New York", lowTemp: 27}
];

var colorScale = d3.scaleLinear()
    .domain([27, 49])
    .range(["blue", "red"]);

var minCircle = 10;
var maxCircle = 100;

var circleSizeScale = d3.scaleLinear()
    .domain([27, 49])
    .range([minCircle, maxCircle]);

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
    .attr("class", "temperature")
    .text("temperature");

svg.append("text")
    .attr("x", "400")
    .attr("y", "80")
    .attr("text-anchor", "middle")
    .attr("class", "title")
    .text("US Cities Low Temperature in Feburary");

var index = 0;

// main loop
d3.interval( update, 1000);

// function for main loop
function update(){

    // remove elements to avoid too many elements
    // on screen
    svg.select("circle").remove();
    svg.selectAll(".temperature").remove();

    if (index >= temperatureData.length - 1) {
        index = 0;
    } else {
        index++;
    }

    svg.append("circle")
    .attr("cx", "400")
    .attr("cy", "200")
    .attr("r", function(){
        var rowOfData = temperatureData[index];
        var temperatureOfRow = rowOfData.lowTemp;
        var radius = circleSizeScale(temperatureOfRow);
        return radius;
    })
    .attr("fill", function(d){
        var rowOfData = temperatureData[index];
        // lowTemp is the attribute of the array of objects
        // from the dataset
        var temperatureOfrow = rowOfData.lowTemp;
        // use the linear scale called colorScale
        var currentColor = colorScale(temperatureOfrow);
        return currentColor;
    });

    svg.append("text")
    .attr("x", "400")
    .attr("y", "300")
    .attr("class", "temperature")
    .attr("text-anchor", "middle")
    .text(function(d){
        var rowOfData = temperatureData[index];
        // lowTemp is the attribute of the array of objects
        // from the dataset
        var cityOfRow = rowOfData.city;
        var temperatureOfRow = rowOfData.lowTemp;
        var textLabel =  cityOfRow + " Temperature: " +  
            temperatureOfRow + "F" ;
        return textLabel;
    });

    console.log(index);

}