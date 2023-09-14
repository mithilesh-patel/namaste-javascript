// It reduces all the elements of the array to a single value by 
// repeatedly applying a function. It is an alternative of using a 
// loop and updating the result for every scanned element


let arr=[1,2,3,4,5,6,7,8,9,10]

function summation(a,b){
    return a+b;
}

let sumOfNumbers = arr.reduce(summation)

console.log(sumOfNumbers);