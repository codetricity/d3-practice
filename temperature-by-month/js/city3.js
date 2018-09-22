function createButtons(cities) {
  const form = d3.select('body').append('form');

  for (let index = 0; index < cities.length; index++) {
    form.append('label').append('input')
      .attr('type', 'radio')
      .attr('name', 'city_button')
      .attr('value', cities[index]);
  }
}

function drawCircles(circles, cityColor) {
  const cityName = this.value;
  circles.append('g')
    .append('circle')
    .attr('cx', (d) => { monthPosition(d.month); })
    .attr('cy', (d) => { yScale(d[cityName]); })
    .attr('r', '5')
    .attr('fill', () => {
      // var cityName = cities[index];
      const color = cityColor(cityName);
      return color;
    });
}

function getCities(data) {
  // only use the first object
  const firstLine = data[0];

  // create an empty array to hold the names of cities
  let arrayOfCities = [];

  // loop through object
  for (var key in firstLine) {
    arrayOfCities.push(key);
  }

  // delete first element as the first
  // element is the month

  arrayOfCities.shift();

  return (arrayOfCities);
}

const WIDTH = 800;
const HEIGHT = 600;

const MARGIN = { TOP: 50, BOTTOM: 100, RIGHT: 50, LEFT: 100 };
const SVG_HEIGHT = HEIGHT + MARGIN.TOP + MARGIN.BOTTOM;
const SVG_WIDTH = WIDTH + MARGIN.RIGHT + MARGIN.LEFT;

const svg = d3.select('body').append('svg')
  .attr('width', SVG_WIDTH)
  .attr('height', SVG_HEIGHT)
  .append('g')
  .attr('transform', `translate( ${MARGIN.LEFT}, ${MARGIN.TOP} )`);


// using this only to show x axis ticks
const yLabelScale = d3.scaleTime()
  .domain([new Date('January 1, 2018'), new Date('December 1, 2018')])
  .range([0, WIDTH]);

const monthPosition = d3.scaleLinear()
  .domain([1, 12])
  .range([0, WIDTH]);

const yScale = d3.scaleLinear()
  .domain([75, 17])
  .range([0, HEIGHT]);

// %B is the full name of the month
const xAxis = d3.axisBottom(yLabelScale)
  .tickFormat(d3.timeFormat('%B'));

const yAxis = d3.axisLeft(yScale);

svg.append('g')
  .call(yAxis);

svg.append('g')
  .attr('transform', `translate(0, ${HEIGHT}`)
  .call(xAxis);

d3.csv('city-month.csv').then((dataInFunction) => {
  const circles = svg.selectAll('circle')
    .data(dataInFunction)
    .enter();
  const cities = getCities(dataInFunction);


  const cityColor = d3.scaleOrdinal()
    .domain(cities)
    .range(d3.schemeSet2);

  createButtons(cities);

  // selecting "input" must be below createButtons
  const buttons = d3.selectAll('input');
  buttons.on('change', drawCircles(circles, cityColor));
});
