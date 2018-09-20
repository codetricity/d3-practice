var buttons = d3.selectAll("input");

var svg = d3.select("#visualization")
    .append("svg")
        .attr("width", "300")
        .attr("height", "300");

var rectData = [
    {"x": 5, "y": 25, "height": 50, "width": 50},
    {"x": 85, "y": 105, "height": 50, "width": 50},
    {"x": 165, "y": 185, "height": 50, "width": 50}];

var rects = svg
    .selectAll("rect")
    .data(rectData)
    .enter()
    .append("rect")
        .attr("x", (d)=>{return d.x; })
        .attr("y", (d)=>{
            return d.y;
        })
        .attr("height", (d)=>{
            return d.height;
        })
        .attr("width", (d)=>{return d.width;})
        .attr("id", (d, i)=>{
            return "rect-" +i;
        });

buttons.on("change", changeWidth);

function changeWidth() {
    rects
        .transition()
            .duration(3000)
            .attr("width", "300")
        .transition()
            .duration(3000)
            .attr("width", "50");
}

function getChange(){
    console.log("Got change to " + this.value);
}