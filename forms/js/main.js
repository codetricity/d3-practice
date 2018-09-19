var inputElems = d3.selectAll("input");



function inputChange() {
    // alert(this.value);
    console.log("got change " + this.value);
}

inputElems.on("change", inputChange);