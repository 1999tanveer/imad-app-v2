console.log('Loaded!');
                    
                    //Changing the content in html.
                    //var element = document.getElementById('intro');
                    
                    //element.innerHTML='Hai I am Salih';
                    
                    //Animating the image to move.
var img = document.getElementById('salih');
var marginleft=0;

function moveright() {
if(marginleft<950) {
     marginleft=marginleft+10;
     img.style.marginLeft = marginleft + 'px';
 }
else{
     marginleft=-900;
     img.style.marginLeft = marginleft + 'px';
 }
    
}

img.onclick=function() {
  var interval = setInterval(moveright,20);
};




var button = document.getElementById("counter");
button.onclick=function(){
    counter=counter+1;    
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
    
}