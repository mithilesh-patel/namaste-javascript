// First-Class Function: A programming language is said to have First-class functions if 
// functions in that language are treated like other variables. So the functions can be assigned
// to any other variable or passed as an argument or can be returned by another function. 
// JavaScript treat function as a first-class-citizens.


var func= function(){
    return 5*6;

}

console.log(func());

//Here in the console the value of func after calling will be 30, as 30 will be returned and as it is inside
// console.log(), it will output 30.

