var canvas_var="canvas1"

canvas_var=
  document.getElementById("canvas1");
ctx= canvas_var.getContext("2d");

function rect() {

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth="5";
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth="5";
ctx.arc(200, 100, 40, 0, 2*Math.PI);
ctx.stroke();
}