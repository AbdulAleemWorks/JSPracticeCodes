//QWrite a program that prints the temperature closest to 0 among input data.
//  If two numbers are equally close to zero, positive integer has to be considered closest to zero 
// (for instance, if the temperatures are -5 and 5, then display 5).
const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
let result =parseInt(inputs[0]);
if (inputs.length === 1 && inputs[0] === "") {
        result=0;
    }
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    let x;
    if(t>=0){
        x=t;
    }else{
        x=-1*(t);
    }
    if(result>x){
        result=inputs[i];
    }
    
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
if(result<0){
    result=-1*(result);
}
console.log(result);

