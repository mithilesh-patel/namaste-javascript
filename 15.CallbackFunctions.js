setTimeout(function show(params) {
  console.log("This is show"+ params);
},4000)



function x(y) {
  console.log("x");
  y();
}

function third() {
  console.log('This function iscalled inside another function');
  
}

x(third);