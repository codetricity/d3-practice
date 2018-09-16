d3.csv("city-month.csv").then(function(dataInFunction){
    var cities = getCities(dataInFunction);
    // console.log(cities);
});

function getCities(data) {
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