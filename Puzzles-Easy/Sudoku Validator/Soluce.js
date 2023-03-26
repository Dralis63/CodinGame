let ligne = Array.from({length:9},x=>0); 
let rows = Array.from({length:9},x=>0);
let cols = Array.from({length:9}, x=>0);
let squares = Array.from({length:9},x=>0);
let result;

for (let i = 0; i < 9; i++) {
    const inputs = readline().split(' ').map(Number);
    inputs.map((current,index)=> cols[index] += current);
    inputs.map( (current,index)=> squares[Math.trunc(i/3)*3 + Math.trunc(index/3)] +=  current);
    rows[i] = inputs.reduce((acc,current)=>acc+current);
    ligne[i] = inputs
}

result = rows.every( (current) => current === 45)&&
         cols.every( (current) => current === 45)&&
         squares.every( (current) => current === 45)&&
         ligne.every(current => { let numbers = new Set(current); return [1,2,3,4,5,6,7,8,9].every(i => numbers.has(i));});

console.log(result);