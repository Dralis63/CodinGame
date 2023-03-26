const operation = readline();
var pseudoRandomNumber = parseInt(readline());

let rotors = Array.from({length : 3}, () => readline()
                                            .split('')
                                            .map(charInIndex));

let inverseRotors = rotors
                    .map(rotor =>
                     rotor.reduce((inverse, c, i) => {inverse[c] = i; return inverse;}, []))
                     .reverse();

var message = readline()

if (operation == 'ENCODE'){
     message = message.split('')
                        .map(charInIndex)
                        .map(a => (a+pseudoRandomNumber++) % 26)
                        .map(c => rotors.reduce((c, rotor)=> rotor[c], c))
                        .map(indexToChar)
                        .join('')                        
                       ;
                        
}else{
        message = message.split('')
                        .map(charInIndex)
                        .map(c => inverseRotors.reduce((c,rotor) => rotor[c],c))
                        .map(c => (c - pseudoRandomNumber++ + 26*3) % 26 )
                        .map(indexToChar)
                        .join('');

}

console.log(message)

function charInIndex(c) {
    return c.charCodeAt(0) - 65;
}
function indexToChar(i) {
    return String.fromCharCode(i + 65);
}