let arr=[1,2,3,4,5,6,7]

function squares(num){
    return num*num;
}

function cubes(num){
    return num*num*num;
}

let squaresarr= arr.map(squares)
let cubesarr= arr.map(cubes)

console.log(squaresarr);
console.log(cubesarr);