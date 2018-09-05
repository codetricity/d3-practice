
var width = 1000;
var height = 400;

var margin = {top: 50, bottom: 100, left: 100, right: 50};

var svgWidth = width + margin.right + margin.left;

var svg = d3.select("body").append("svg")
    .attr("width", svgWidth)
    .attr("height", "400");

d3.csv("top100.csv").then(function(data){

    data.forEach(function(d){
        d.views = +d.views;
    });

    console.log(data);
    
    var xScale = d3.scaleBand()
        .domain(data.map(function(rowd){
            return rowd.title;
        }))
        .range([0, width])
        .paddingInner(0.3)
        .paddingOuter(0.3);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(d, function(drow){
            // return drow.views;  
            return 47227110;
        })])
        .range([height,0]);

 
    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
            .attr("x", function(d){
                console.log(d.title, d.views);
                return xScale(d.title);
            })
            .attr("y", (d)=>{
                return yScale(d.views);
            })
            .attr("width", xScale.bandwidth)
            .attr("height", (d)=>{
                console.log(yScale(d.views));
                return height - yScale(d.views);
            });
   
});