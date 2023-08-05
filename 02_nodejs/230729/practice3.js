// setTimeout(function () {
//   document.querySelector("body").style.backgroundColor = "red";
//   setTimeout(function () {
//     document.querySelector("body").style.backgroundColor = "orange";
//     setTimeout(function () {
//       document.querySelector("body").style.backgroundColor = "yellow";
//       setTimeout(function () {
//         document.querySelector("body").style.backgroundColor = "green";
//         setTimeout(function () {
//           document.querySelector("body").style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// colorChange("red").then(colorChange("orange"));
exec();

function colorChange(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = color;
      resolve();
    }, 1000);
  });
}

async function exec() {
  await colorChange("red");
  await colorChange("orange");
  await colorChange("yellow");
  await colorChange("green");
  await colorChange("blue");
}
