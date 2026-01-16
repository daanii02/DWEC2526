document.addEventListener("keydown", (e) => {
  const tecla = e.key.toUpperCase();

  const teclas = {
    Q: "sound1",
    W: "sound2",
    E: "sound3",
    R: "sound4",

    A: "sound5",
    S: "sound6",
    D: "sound7",
    F: "sound8",

    Z: "sound9",
    X: "sound10",
    C: "sound11",
    V: "sound12",

    
  };

const soundId = teclas[tecla];        
const audio = document.getElementById(soundId); 

if (audio) {                                            
  audio.play();                          
}
});