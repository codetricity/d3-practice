var buttons = d3.selectAll("input");

function getChange(){
    console.log("Got change to " + this.value);
}

buttons.on("change", getChange);