var count = readline();
var temps = readline().split(' ');

var sortedTemps = temps.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a);
printErr(sortedTemps);

var result = sortedTemps[0] || 0;

console.log(result);