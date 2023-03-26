const LON = readline().replace(',','.');
const LAT = readline().replace(',','.');
const N = parseInt(readline());
a=[];
b=[];
for (let i = 0; i < N; i++) {
    const DEFIB = readline().split(';');
    var x = Math.abs((DEFIB[4].replace(',','.') - LON));
    var y = Math.abs((DEFIB[5].replace(',','.') - LAT));
    a.push(x+y);
    b.push(DEFIB[1]);
}
c=a.indexOf(Math.min(...a));
console.log(b[c]);