console.log('Loaded!');
ellipse(200, 200, 200, 300);

//Changing the content in html.
var element = document.getElementById('intro');

element.innerHTML='Hai I am Salih';

//Animating the image to move.
var img = document.getElementById('salih');
var marginleft=0;

function moveright() {
 marginleft=marginleft+10;
 img.style.marginLeft = marginleft + 'px';
}

img.onclick=function() {
  //img.style.marginleft=100;
   var interval = setInterval(moveright,20);
};
