// var colors = ["blue", "green", "yellow", "orange", "red"];

// average low january temperature in F. 
var temperatureData = [
    {
      "lowTemp": 38,
      "city": "Atlanta, Georgia"
    },
    {
      "lowTemp": 45,
      "city": "Austin, Texas"
    },
    {
      "lowTemp": 27,
      "city": "Baltimore, Maryland"
    },
    {
      "lowTemp": 37,
      "city": "Birmingham, Alabama"
    },
    {
      "lowTemp": 25,
      "city": "Boston, Massachusetts"
    },
    {
      "lowTemp": 19,
      "city": "Buffalo, New York"
    },
    {
      "lowTemp": 33,
      "city": "Charlotte, North Carolina"
    },
    {
      "lowTemp": 20,
      "city": "Chicago, Illinois"
    },
    {
      "lowTemp": 25,
      "city": "Cincinnati, Ohio"
    },
    {
      "lowTemp": 24,
      "city": "Cleveland, Ohio"
    },
    {
      "lowTemp": 25,
      "city": "Columbus, Ohio"
    },
    {
      "lowTemp": 41,
      "city": "Dallas, Texas"
    },
    {
      "lowTemp": 20,
      "city": "Denver, Colorado"
    },
    {
      "lowTemp": 21,
      "city": "Detroit, Michigan"
    },
    {
      "lowTemp": 21,
      "city": "Hartford, Connecticut"
    },
    {
      "lowTemp": 47,
      "city": "Houston, Texas"
    },
    {
      "lowTemp": 24,
      "city": "Indianapolis, Indiana"
    },
    {
      "lowTemp": 45,
      "city": "Jacksonville, Florida"
    },
    {
      "lowTemp": 26,
      "city": "Kansas City, Missouri"
    },
    {
      "lowTemp": 43,
      "city": "Las Vegas, Nevada"
    },
    {
      "lowTemp": 49,
      "city": "Los Angeles, California"
    },
    {
      "lowTemp": 30,
      "city": "Louisville, Kentucky"
    },
    {
      "lowTemp": 36,
      "city": "Memphis, Tennessee"
    },
    {
      "lowTemp": 62,
      "city": "Miami, Florida"
    },
    {
      "lowTemp": 19,
      "city": "Milwaukee, Wisconsin"
    },
    {
      "lowTemp": 13,
      "city": "Minneapolis, Minnesota"
    },
    {
      "lowTemp": 32,
      "city": "Nashville, Tennessee"
    },
    {
      "lowTemp": 48,
      "city": "New Orleans, Louisiana"
    },
    {
      "lowTemp": 29,
      "city": "New York, New York"
    },
    {
      "lowTemp": 33,
      "city": "Oklahoma City, Oklahoma"
    },
    {
      "lowTemp": 52,
      "city": "Orlando, Florida"
    },
    {
      "lowTemp": 28,
      "city": "Philadelphia, Pennsylvania"
    },
    {
      "lowTemp": 49,
      "city": "Phoenix, Arizona"
    },
    {
      "lowTemp": 23,
      "city": "Pittsburgh, Pennsylvania"
    },
    {
      "lowTemp": 37,
      "city": "Portland, Oregon"
    },
    {
      "lowTemp": 24,
      "city": "Providence, Rhode Island"
    },
    {
      "lowTemp": 32,
      "city": "Raleigh, North Carolina"
    },
    {
      "lowTemp": 31,
      "city": "Richmond, Virginia"
    },
    {
      "lowTemp": 45,
      "city": "Riverside, California"
    },
    {
      "lowTemp": 19,
      "city": "Rochester, New York"
    },
    {
      "lowTemp": 41,
      "city": "Sacramento, California"
    },
    {
      "lowTemp": 25,
      "city": "Salt Lake City, Utah"
    },
    {
      "lowTemp": 44,
      "city": "San Antonio, Texas"
    },
    {
      "lowTemp": 51,
      "city": "San Diego, California"
    },
    {
      "lowTemp": 48,
      "city": "San Francisco, California"
    },
    {
      "lowTemp": 45,
      "city": "San Jose, California"
    },
    {
      "lowTemp": 37,
      "city": "Seattle, Washington"
    },
    {
      "lowTemp": 28,
      "city": "St. Louis, Missouri"
    },
    {
      "lowTemp": 54,
      "city": "Tampa, Florida"
    },
    {
      "lowTemp": 34,
      "city": "Virginia Beach, Virginia"
    },
    {
      "lowTemp": 31,
      "city": "Washington, DC"
    }
  ];

var width = 800;
var height = 400;



var minTemperature = d3.min(temperatureData, function(d){
    return d.lowTemp;
});

var maxTemperature = d3.max(temperatureData, function(d){
    return d.lowTemp;
});

var colorScale = d3.scaleLinear()
    .domain([minTemperature, maxTemperature])
    .range(["blue", "red"]);

var minCircle = 10;
var maxCircle = 100;

var circleSizeScale = d3.scaleLinear()
    .domain([minTemperature, maxTemperature])
    .range([minCircle, maxCircle]);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);


svg.append("circle")
    .attr("cx", width/2)
    .attr("cy", height/2)
    .attr("r", circleSizeScale(temperatureData[0].lowTemp))
    .attr("fill", colorScale(temperatureData[0].lowTemp))
    .attr("fill-opacity", 0)
    .transition(d3.transition().duration(500))
      .attr("fill-opacity", 1);

svg.append("text")
    .attr("x", width/2)
    .attr("y", height * 0.75)
    .attr("text-anchor", "middle")
    .attr("class", "temperature")
    .text(temperatureData[0].city +  
        " temperature: " +
        temperatureData[0].lowTemp )
    .attr("fill-opacity", 0)
    .transition(d3.transition().duration(500))
      .attr("fill-opacity", 1);

svg.append("text")
    .attr("x", width/2)
    .attr("y", "80")
    .attr("text-anchor", "middle")
    .attr("class", "title")
    .text("US Cities Low Temperature in Feburary");

var index = 1;

// main loop
d3.interval( update, 2000);

// function for main loop
function update(){

    // remove elements to avoid too many elements
    // on screen
    svg.select("circle").remove();
    svg.selectAll(".temperature").remove();
    svg.select(".title").remove();

    if (index >= temperatureData.length - 1) {
        index = 0;
    } else {
        index++;
    }

    svg.append("text")
    .attr("x", width/2)
    .attr("y", "80")
    .attr("text-anchor", "middle")
    .attr("class", "title")
    .attr("fill-opacity", 0)
    .text("US Cities Low Temperature in Feburary")
        .transition(d3.transition().duration(1200))
            .attr("fill-opacity", 1);

    svg.append("circle")
    .attr("cx", 0)
    .attr("cy", height/2)
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
    })
    .attr("fill-opacity", 0)
    .transition(d3.transition().duration(1000))
      .attr("fill-opacity", 1)
      .attr("cx", width/2);

    svg.append("text")
    .attr("x", 0)
    .attr("y", height * 0.75)
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
    })
    .attr("fill-opacity", 0)
    .transition(d3.transition().duration(1000))
      .attr("fill-opacity", 1)
      .attr("x", width/2);


}


