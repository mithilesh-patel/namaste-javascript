setTimeout(function show(params) {
  console.log("This is show"+ params);
},4000)



function x(y) {
  console.log("x");
  y();
}



x(function another() {
  console.log('another');
});
// ========================================================




// function attachEventListener() {
    
//     let x=0;
//     document.getElementById("clickme").addEventListener('click', function show() {
//         console.log("Button clicked", ++x);
        
//     })
// }

// attachEventListener();

// In this case using a global variable is not a good idea as it is not secure for data hiding
// so we will use closures here


// =================================================
