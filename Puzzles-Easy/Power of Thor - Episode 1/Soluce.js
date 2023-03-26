var inputs = readline().split(' ');
const light = {x:parseInt(inputs[0]), y:parseInt(inputs[1])};
const thor = {x:parseInt(inputs[2]), y:parseInt(inputs[3])};

while (true) {

    let direction = "";
    
    if (thor.y > light.y){direction += 'N'; thor.y--;}
    if (thor.y < light.y){direction += 'S'; thor.y++;}
    if (thor.x > light.x){direction += 'W'; thor.x--;}
    if (thor.x < light.x){direction += 'E'; thor.x++;}


    console.log(direction);
}