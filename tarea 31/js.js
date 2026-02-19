let padre = document.getElementById("padre");
let fortuna=document.createElement("input");
fortuna.setAttribute("type","button");
fortuna.setAttribute("value", "");
fortuna.className="boton";
fortuna.addEventListener("click",function(){
 
    let frases=[
        "Mas vale tarde que nunca.",
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "No cuentes los días, haz que los días cuenten.",
        "El único modo de hacer un gran trabajo es amar lo que haces.",
        "La felicidad no es algo hecho. Viene de tus propias acciones."
    ];
    for (let i=0;i<frases.length;i++){
        let indice=Math.floor(Math.random()*frases.length);
        document.className(".frase").innerHTML=frases[indice];
        
    }

}); 
padre.appendChild(fortuna);

let p = document.createElement("p");
p.className="frase";
padre.appendChild(p);