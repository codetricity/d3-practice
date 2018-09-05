var height = 400;
var width = 1400;

var margin = {top: 100, bottom: 200, left: 80, right: 50};

var svgHeight = height + margin.top + margin.bottom;
var svgWidth = width + margin.right + margin.left;

var svg = d3.select("body").append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + 
            margin.right + ")");

svg.append("g")
    .append("text")
    .text("Most Popular TED Talks")
    .attr("class", "title")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "text-before-edge")
    .attr("x", width/2)
    .attr("y", 0);


d3.csv("top100.csv").then((data)=>{

    data.forEach(function(d){
        d.views = +d.views;
    });

    var minView = d3.min(data, function(d){
        // console.log(d);
        return d.views;
    });

    var maxView = d3.max(data, function(d){
        return d.views;
    });
    
    var yScale = d3.scaleLinear()
        .domain([0, maxView])
        .range([400, 0]);
        
    var xScale = d3.scaleBand()
        .domain(data.map(function(d){ return d.title; }))
        .range([0, width])
        .paddingInner(0.3)
        .paddingOuter(0.3);

    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
            .attr("x", (d, i)=> {
                return xScale(d.title);
            })
            .attr("y", (d)=>{
                return yScale(d.views);
            })
            .attr("width", xScale.bandwidth)
            .attr("height", (d)=>{
                return height - yScale(d.views);
            });
    
    var yAxisCall = d3.axisLeft(yScale);

    svg.append("g")
        .call(yAxisCall)
        .attr("transform", "translate(-5, 0)");
    
    var xAxisCall = d3.axisBottom(xScale);

    svg.append("g")
        .call(xAxisCall)
        .attr("transform", "translate(0," + height + ")")
        .selectAll("text")
            .attr("text-anchor", "start")
            .attr("transform", "rotate(45)");
        

});

