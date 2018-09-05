// var dataset = [
//     {"year": 1977, "population": 2459},
//     {"year": 1988, "population": 1114},
//     {"year": 2004, "population": 1596}

// ];

d3.csv("panda.csv").then(function(data){
    data.forEach(function(d){
        d.year = +d.year;
        d.population = +d.population;
    });
    console.log(data);
    var yearExtent = d3.extent(data, function(d){
        return d.year;
    });
    console.log(yearExtent);

    var populationExtent = d3.extent(data, function(d){
        return d.population;
    });

    var width = 800;
    var height = 400;

    var margin = {left: 100, right: 50, top: 70, bottom: 200};

    var viewportWidth = width + margin.left + margin.right;
    var viewportHeight = height + margin.top + margin.bottom;

    var svg = d3.select("body").append("svg")
        .attr("width", viewportWidth)
        .attr("height", viewportHeight)
        .append("g")
            .attr("transform", "translate(" + margin.left +
                "," + margin.top + ")");
    
    var xScale = d3.scaleTime()
        .domain([new Date(yearExtent[0] - 5, 0, 0),
                new Date(yearExtent[1] + 5, 0 ,0)])
        .range([0, width]);


    var yScale = d3.scaleLinear()
        .domain([populationExtent[0] - 300, populationExtent[1] + 100])
        .range([height, 0]);

    var xPlot = d3.scaleLinear()
        .domain([yearExtent[0] - 5, yearExtent[1] + 5])
        .range([0, width]);
        
    console.log(xScale(1977));
    
    svg.append("g")
        .call(d3.axisBottom().scale(xScale))
        .attr("transform", "translate(" + 0 + "," +
            height + ")");
    
    svg.append("g")
        .call(d3.axisLeft().scale(yScale));
    
    var barWidth = 50;

    svg.append("g")
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function(d, i){
            console.log(xPlot(d.year));
            return xPlot(d.year) - barWidth/2;
        })
        .attr("y", function(d){
            return yScale(d.population);
        })
        .attr("width", barWidth)
        .attr("height", function(d){
            return height - yScale(d.population);
        })
        .attr("fill", "#A9F5D0");
    
    svg.append("g")
        .append("text")
        .attr("class", "axis")
        .text("Year of Population Survey")
        .attr("x", width/2 )
        .attr("text-anchor", "middle")
        .attr("y", height + 50);
    
    svg.append("g")
        .append("text")
        .attr("class", "axis")
        .text("Number of Pandas")
        .attr("x", -50)
        .attr("y", height/2)
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90, -50," +  height/2 + ")");

    svg.append("g")
        .append("text")
        .attr("class", "title")
        .text("Change in Giant Panda Population")
        .attr("x", width/2)
        .attr("y", -30)
        .attr("text-anchor", "middle");

});



