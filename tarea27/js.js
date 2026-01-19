let padre = document.getElementById("padre");

let hijo1 = document.createElement("div");
hijo1.className="elemento1";
padre.appendChild(hijo1);
hijo1.style.left=Math.random()* 500 +"px";
hijo1.style.top=Math.random()* 500 +"px"; 

let hijo2 = document.createElement("div");
hijo2.className="elemento2";
padre.appendChild(hijo2);
hijo2.style.left=Math.random()* 500 +"px";
hijo2.style.top=Math.random()* 500 +"px";

let hijo3 = document.createElement("div");
hijo3.className="elemento3";
padre.appendChild(hijo3);
hijo3.style.left=Math.random()* 500 +"px";
hijo3.style.top=Math.random()* 500 +"px";

let hijo4 = document.createElement("div");
hijo4.className="elemento4";
padre.appendChild(hijo4);
hijo4.style.left=Math.random()* 500 +"px";
hijo4.style.top=Math.random()* 500 +"px";

let hijo5 = document.createElement("div");
hijo5.className="elemento5";
padre.appendChild(hijo5);
hijo5.style.left=Math.random()* 500 +"px";
hijo5.style.top=Math.random()* 500 +"px";

let cain=document.createElement("input");
cain.setAttribute("type","button");
cain.setAttribute("value", "limpia la mesa");
cain.className="buttoneliminar";
cain.addEventListener("click",function(){
    padre.removeChild(hijo1);
    padre.removeChild(hijo2);
    padre.removeChild(hijo3);
    padre.removeChild(hijo4);
    padre.removeChild(hijo5);
}); 
padre.appendChild(cain);

let crea=document.createElement("input");
crea.setAttribute("type","button");
crea.setAttribute("value", "ensucia la mesa");
crea.className="buttoncrear";
crea.addEventListener("click",function(){
    padre.appendChild(hijo1);
    padre.appendChild(hijo2);
    padre.appendChild(hijo3);
    padre.appendChild(hijo4);
    padre.appendChild(hijo5);
}); 
padre.appendChild(crea);
