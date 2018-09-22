d3.select("body").append("hr");

var dataset = [{"temperature":100, "date": 3}, 
               {"temperature":150, "date": 5}, 
               {"temperature":200, "date": 2}, 
               {"temperature":44, "date": 1}, 
               {"temperature":27, "date": 0}, 
               {"temperature":300, "date": 3}, 
               {"temperature":284, "date": 5}, 
               {"temperature":314, "date": 4}
              ];

var svg = d3.select("body").append("svg")
  .attr("width", "600")
  .attr("height", "400");



var rects = svg.selectAll("rect")
  .data(dataset)
  .enter()
    .append("rect")
    .attr("width", "20")
    .attr("height", "20")
    .attr("x", function(d){
      return d.date * 100;
    })
    .attr("y", function(d) {
      return(d.temperature);
    })
    .attr("fill", "blue")
    .attr("id", "bluesquare");

  svg.append("rect")
    .attr("width", "20")
    .attr("height", "20")
    .attr("x", "100")
    .attr("y", "100")
    .attr("fill", "red")
    .attr("id", "redsquare");

var checkboxes = d3.selectAll("input");

checkboxes.on("change", getColor);

function getColor() {
  if (this.checked){
    if (this.value == "red") {
      console.log("move red");
      d3.selectAll("#redsquare")
        .transition()
          .attr("x", "150")
        .transition()
          .attr("x", "100");
    }
    if (this.value == "blue") {
      console.log("move blue")
      d3.selectAll("#bluesquare")
        .transition()
          .attr("x", function(d){
            return (d.date *100) + 100;
          })
        .transition()
          .attr("x", function(d){
            return d.date * 100;
          });
    }
  }
  
}