// function x(){
//     var a=20;

//     function y(){
//         console.log(a);
//     }

//     return  y;

// }
// x()();
// =============================================================
// function outerFunction() {
//   let localVar = "I am a local variable";
//   console.log(localVar); // Output: "I am a local variable"
// }
// outerFunction();
// console.log(localVar); // Error: localVar is not defined

// =============================================================
// function outerFunction() {
//     let outerVar = 'I am an outer variable';

//     function innerFunction() {
//       console.log(outerVar); // innerFunction retains access to outerVar
//     }

//     return innerFunction;
//   }

//   const closureExample = outerFunction();
//   closureExample(); // Output: "I am an outer variable"

// ====================================================

// function x() {
//   var a = 20;

//   function y() {
//     console.log(a);
//   }
//   a = 50;
//   return y;
// }
// var z = x();
// console.log(z);
// z(); //  output: 50

// ====================================================

function z() {
  var b = 100;
  function x() {
    var a = 20;

    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();
