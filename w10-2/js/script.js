let x = 0;
let g = 0;

function change() {
x += 10;

let b = document.getElementById('box');
console.log(b);
b.innerHTML = "WOW";
b.style.left =  x + "px";
b.style.backgroundColor = "pink";

}

function addDiv() {
  let newElt = document.createElment( "div" );

  newElt.style.backgroundColor = "gray";
  newElt.style.width = "50px";
  newElt.style.height = "50px"；
  newElt.style.right = "50px";
  newElt.sytle.margin = "30px";

  document.getElementById('box').appendChild(newElt)

}
