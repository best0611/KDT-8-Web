// call("kim")
//   .then(function (name) {
//     console.log(name + "반가워");
//     return back();
//   })
//   .then(function (txt) {
//     console.log(txt + "를 실행했구나");
//     return hell();
//   });
exec();

function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}
function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      let txt = "back";
      resolve(txt);
    }, 1000);
  });
}
function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let message = "callback hell";
      console.log("여기는 " + message);
      resolve(message);
    }, 1000);
  });
}

async function exec() {
  let user = await call("kim");
  console.log(user + "반가워");
  let txt = await back();
  console.log(txt + "을 실행했구나");
  hell();
}
