console.log('Loaded!');

//Changing the content in html.
var element = document.getElementById('intro');

element.innerHTML='Hai I am Salih';

//Animating the image to move.
var img = document.getElementById('salih');
var leftmar=0;

function moveright() {
 leftmar=leftmar+10;
 img.style.marginleft = leftmar+'px';
}

img.onclick=function() {
var interval = setInterval(moveright,20)
}
