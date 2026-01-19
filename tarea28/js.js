let padre = document.getElementById("marcador");
let contenedor = document.getElementById("contenedor");


let play=document.createElement("input");
play.setAttribute("type","button");
play.setAttribute("value", "play");
play.className="button";
play.addEventListener("click", function () {
  puntos = 0;
  textoPuntos.innerHTML = " Puntos: 0";

  if (contenedor.contains(sprite1)) {
    contenedor.removeChild(sprite1);
  }

  if (contenedor.contains(sprite2)) {
    contenedor.removeChild(sprite2);
  }
 if (contenedor.contains(sprite3)) {
    contenedor.removeChild(sprite3);
  }
  if (contenedor.contains(sprite4)) {
    contenedor.removeChild(sprite4);
  }
  if (contenedor.contains(sprite5)) {
    contenedor.removeChild(sprite5);
  }

  setTimeout(function () {
  contenedor.appendChild(sprite1);
  reboteSprite1();
}, 1000);

setTimeout(function () {
  contenedor.appendChild(sprite2);
  reboteSprite2();
}, 3000);

setTimeout(function () {
  contenedor.appendChild(sprite3);
  reboteSprite3();
}, 2000);

setTimeout(function () {
  contenedor.appendChild(sprite4);
 reboteSprite4();
}, 2000);

setTimeout(function () {
  contenedor.appendChild(sprite5);
  reboteSprite5();
}, 2000);
});

padre.appendChild(play);

let pause=document.createElement("input");
pause.setAttribute("type","button");
pause.setAttribute("value", "pause");
pause.className="button";
pause.addEventListener("click",function(){
 

}); 
padre.appendChild(pause);

let replay=document.createElement("input");
replay.setAttribute("type","button");
replay.setAttribute("value", "replay");
replay.className="button";
replay.addEventListener("click",function(){
    
}); 
padre.appendChild(replay);

let sprite1=document.createElement("div");
sprite1.className="sprite1";
sprite1.style.left="55px";
sprite1.style.top="50px";

let sprite2=document.createElement("div");
sprite2.className="sprite2";
sprite2.style.left="70px";
sprite2.style.top="70px";

let sprite3=document.createElement("div");
sprite3.className="sprite3";
sprite3.style.left="55px";
sprite3.style.top="50px";

let sprite4=document.createElement("div");
sprite4.className="sprite4";
sprite4.style.left="55px";
sprite4.style.top="50px";

let sprite5=document.createElement("div");
sprite5.className="sprite5";
sprite5.style.left="70px";
sprite5.style.top="70px";

let puntos = 0;
let textoPuntos = document.createElement("p");
textoPuntos.innerHTML = " Puntos: 0";
padre.appendChild(textoPuntos);


sprite1.addEventListener("click", function(){
  if (contenedor.contains(sprite1)) {       
    contenedor.removeChild(sprite1);        
    puntos++;
    textoPuntos.innerHTML = " Puntos: " + puntos;
  }
});
sprite2.addEventListener("click", function(){
  if (contenedor.contains(sprite2)) {       
    contenedor.removeChild(sprite2);        
    puntos++;
    textoPuntos.innerHTML = " Puntos: " + puntos;
  }
});
sprite3.addEventListener("click", function(){
  if (contenedor.contains(sprite3)) {       
    contenedor.removeChild(sprite3);        
    puntos++;
    textoPuntos.innerHTML = " Puntos: " + puntos;
  }
});
sprite4.addEventListener("click", function(){
  if (contenedor.contains(sprite4)) {       
    contenedor.removeChild(sprite4);        
    puntos++;
    textoPuntos.innerHTML = " Puntos: " + puntos;
  }
});
sprite5.addEventListener("click", function(){
  if (contenedor.contains(sprite5)) {       
    contenedor.removeChild(sprite5);        
    puntos++;
    textoPuntos.innerHTML = " Puntos: " + puntos;
  }
});


let x1 = Math.floor(Math.random() * 300);
let y1 = Math.floor(Math.random() * 200);
let direccionX1 = 1;
let direccionY1 = 1;

function reboteSprite1(){
  setInterval(function(){
    x1 = x1 + 5 * direccionX1;
    y1 = y1 + 5 * direccionY1;

    if (x1 >= 950 || x1 <= 0) direccionX1 *= -1;
    if (y1 >= 550 || y1 <= 0) direccionY1 *= -1;

    sprite1.style.left = x1 + "px";
    sprite1.style.top  = y1 + "px";
  }, 30); 
}


let x2 = Math.floor(Math.random() * 300);
let y2 = Math.floor(Math.random() * 200);
let direccionX2 = 1;
let direccionY2 = 1;

function reboteSprite2(){
  setInterval(function(){
    x2 = x2 + 5 * direccionX2;
    y2 = y2 + 5 * direccionY2;

    if (x2 >= 950 || x2 <= 0) direccionX2 *= -1;
    if (y2 >= 550 || y2 <= 0) direccionY2 *= -1;

    sprite2.style.left = x2 + "px";
    sprite2.style.top  = y2 + "px";
  }, 30); 
}

let x3 = Math.floor(Math.random() * 300);
let y3 = Math.floor(Math.random() * 200);
let direccionX3 = 1;
let direccionY3 = 1;

function reboteSprite3(){
  setInterval(function(){
    x3 = x3 + 5 * direccionX3;
    y3 = y3 + 5 * direccionY3;

    if (x3 >= 950 || x3 <= 0) direccionX3 *= -1;
    if (y3 >= 550 || y3 <= 0) direccionY3 *= -1;

    sprite3.style.left = x3 + "px";
    sprite3.style.top  = y3 + "px";
  }, 30); 
}

// SPRITE 4
let x4 = Math.floor(Math.random() * 300);
let y4 = Math.floor(Math.random() * 200);
let direccionX4 = 1;
let direccionY4 = 1;

function reboteSprite4(){
  setInterval(function(){
    x4 = x4 + 5 * direccionX4;
    y4 = y4 + 5 * direccionY4;

    if (x4 >= 950 || x4 <= 0) direccionX4 *= -1;
    if (y4 >= 550 || y4 <= 0) direccionY4 *= -1;

    sprite4.style.left = x4 + "px";
    sprite4.style.top  = y4 + "px";
  }, 30); 
}


let x5 = Math.floor(Math.random() * 300);
let y5 = Math.floor(Math.random() * 200);
let direccionX5 = 1;
let direccionY5 = 1;

function reboteSprite5(){
  setInterval(function(){
    x5 = x5 + 5 * direccionX5;
    y5 = y5 + 5 * direccionY5;

    if (x5 >= 950 || x5 <= 0) direccionX5 *= -1;
    if (y5 >= 550 || y5 <= 0) direccionY5 *= -1;

    sprite5.style.left = x5 + "px";
    sprite5.style.top  = y5 + "px";
  }, 30); 
}
