

var a = prompt('Enter the first variable: ');
var b = prompt('Enter The Second Value')
function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(swap)
  }


function draw()
{
}
function swap()
{
  [a,b]=[b,a]
  console.log("the value after swapping",+a)
  console.log("the value after swapping",+b)
}