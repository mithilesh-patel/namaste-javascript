// function x() {
//   var i = 45;
//   var name="Mithilesh";
//   setTimeout(() => {
//     console.log(i);
//     console.log(name);
//   }, 4000);
// }

// x();

// ======================================
// Print 1 to 5 after 1 sec each ie. Print 1 after 1 sec, 2 after 2 sec and so on.

// function x() {

//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// x();

// ========================================
// Here we are not using the variable let
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}

x();
