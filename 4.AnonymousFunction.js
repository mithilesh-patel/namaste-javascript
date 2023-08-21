// It is a function that does not have any name associated with it.
// Normally we use the function keyword before the function name to define a function in JavaScript,
// however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

// An anonymous function is not accessible after its initial creation, it can only be accessed by a variable
// it is stored in as a function as a value. An anonymous function can also have multiple arguments,
// but only one expression.

//Anonymous function without argument
var sayHello = function () {
  console.log("Hello, How are you?");
};

//Anonymous function with argument
var sayBye = function (name) {
  console.log("Bye, " + name);
};

sayHello();
sayBye("Mukesh");

const names = ["Mithilesh", "Pratik", "Sashikiran", "Nikil"];

names.forEach((element) => {
  sayBye(element);
});
