//  It filters the elements of the array that return false for the applied condition
//  and returns the array which contains elements that satisfy the applied condition


let arr=[1,2,3,4,5,6,7,8,9,10]

function filterEven(num){
    return num%2==0;
}

let evenNumbers = arr.filter(filterEven)

console.log(evenNumbers);