function getNewRandomColor() {
  var myArray = ["red", "yellow", "blue", "green"];
  var rand = myArray[Math.floor(Math.random() * myArray.length)];
  document.getElementById("circle").style.backgroundColor = rand;
}
function getRandomShape() {
  var f_arr = ["", rectangleDraw, "triangleDraw", circleDraw];
  // var i = Math.floor(Math.random() * 5);
  // console.log(i);
  // f_arr[i]();

  //Handling exception
  try {
    var i = Math.floor(Math.random() * f_arr.length);
    console.log(i);
    f_arr[i]();
  } catch (err) {
    document.write("<h1>code fatt gaya bacha mera</h1>");
  }
}
function squareDraw() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "white";
  context.fillRect(25, 25, 50, 50);
}
function rectangleDraw() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "white";
  context.fillRect(15, 20, 70, 50);
}
function triangleDraw() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.moveTo(50, 10);
  context.lineTo(10, 70);
  context.lineTo(90, 70);
  context.fillStyle = "white";
  context.fill();
  context.closePath();
}
function circleDraw() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  /* ctx.arc(x, y, radius, startAngle, endAngle[, counterclockwise] */
  ctx.arc(50, 50, 30, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
}
