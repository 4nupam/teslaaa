var header = document.getElementById("header");
var ms = document.getElementById("models");
var m3 = document.getElementById("model3");
var mx = document.getElementById("modelx");
var my = document.getElementById("modely");
var model = document.getElementById("model");

ms.onclick = function(){
    header.style.backgroundImage = "url(image/image-1.png)";
    model.innerHTML= "Model S";
    model.style.color ="Maroon";
}

m3.onclick = function(){
    header.style.backgroundImage = "url(image/image-2.png)";
    model.innerHTML= "Model 3";
    model.style.color ="Maroon";
}

mx.onclick = function(){
    header.style.backgroundImage = "url(image/image-3.png)";
    model.innerHTML= "Model X";
    model.style.color ="Blue";
}

my.onclick = function(){
    header.style.backgroundImage = "url(image/image-4.png)";
    model.innerHTML= "Model Y";
    model.style.color ="White";
}