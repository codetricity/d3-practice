const WIDTH = 800;
const HEIGHT = 600;

const MARGIN = {TOP: 50, BOTTOM: 100, RIGHT: 50, LEFT: 100};
const SVG_HEIGHT = HEIGHT + MARGIN.TOP + MARGIN.BOTTOM;
const SVG_WIDTH = WIDTH + MARGIN.RIGHT + MARGIN.LEFT;

var svg = d3.select("body").append("svg")
    .attr("width", SVG_WIDTH)
    .attr("height", SVG_HEIGHT)
        .append("g")
            .attr("transform", "translate(" + 
                MARGIN.LEFT + "," + MARGIN.TOP + ")");


// using this only to show x axis ticks
var yLabelScale = d3.scaleTime()
    .domain([new Date("January 1, 2018"), new Date("December 1, 2018")])
    .range([0, WIDTH]);

monthPosition = d3.scaleLinear()
    .domain([1,12])
    .range([0, WIDTH]);

var yScale = d3.scaleLinear()
    .domain([75, 17])
    .range([ 0, HEIGHT]);

// %B is the full name of the month
var xAxis = d3.axisBottom(yLabelScale)
    .tickFormat(d3.timeFormat("%B"));

var yAxis = d3.axisLeft(yScale);

svg.append("g")
    .call(yAxis);

svg.append("g")
    .attr("transform", "translate(0, " +  HEIGHT + ")")
    .call(xAxis);

   

d3.csv("city-month.csv").then(function(dataInFunction){

    var circles = svg.selectAll("circle")
        .data(dataInFunction)
        .enter(); 
        
    var cities = getCities(dataInFunction);


    var cityColor = d3.scaleOrdinal()
        .domain(cities)
        .range(d3.schemeSet2);
/*         .range(["orange", "brown", "red", "blue", "purple"]);
 */
    for (var i = 0; i < cities.length; i++) {
        drawCircles(circles, cities, cityColor, i);
    }

});

function drawCircles(circles, cities, cityColor, index){
    circles.append("g")
        .append("circle")
            .attr("cx", function(d){
                return monthPosition(d.month);
            })
            .attr("cy", function(d){
                var cityName = cities[index];
                return yScale(d[cityName]);
            })
            .attr("r", "5")
            .attr("fill", function(){
                var cityName = cities[index];
                var color = cityColor(cityName);
                console.log(color);
                return color;
            });
}

function getCities(data) {
    console.log("enter into getCities");
    // only use the first object
    var firstLine = data[0];

    // create an empty array to hold the names of cities
    var arrayOfCities = [];

    // loop through object
    for (var key in firstLine) {
        console.log(key);
        arrayOfCities.push(key);
    }

    // delete first element as the first
    // element is the month

    arrayOfCities.shift();

    return (arrayOfCities);
}