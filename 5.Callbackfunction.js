setTimeout(function () {
  console.log("timer");
}, 5000);

function second() {}

setTimeout(function () {
  console.log("This is the second function");
}, 5000);

second();
