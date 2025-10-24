var rosa_js = document.getElementById("rosa");
function moverizq(){
    rosa_js.style.left = "0px";
   rosa_js.style.backgroundImage = "url('instagram.png')";
   rosa_js.style.backgroundColor = "white";
}
function moverderecha(){
    rosa_js.style.left = "200px";
    rosa_js.style.backgroundImage = "url('tiktok.png')";
    rosa_js.style.backgroundColor = "black";
    rosa_js.style.backgroundSize = "cover";

}
function moverarriba(){
    rosa_js.style.top = "0px";
    rosa_js.style.backgroundColor = "white";
    rosa_js.style.backgroundImage = "url('twitterrr.png')";
    rosa_js.style.backgroundSize = "cover";    
}
function moverabajo(){
    rosa_js.style.top = "100px";
    rosa_js.style.backgroundColor = "white";
    rosa_js.style.backgroundImage = "url('snapchat.png')";
    rosa_js.style.backgroundSize = "cover";
}
function reset(){
    rosa_js.style.left = "50px";
    rosa_js.style.top = "40px";
    rosa_js.style.backgroundColor = "black";

}