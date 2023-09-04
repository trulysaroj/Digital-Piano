// Variable 
const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slide input");
const showKey = document.querySelector(".volume-key input");



let allKey = [];

let audio = new Audio("tunes/a.wav");  // By default audio source will be 'a';

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;   //Passing audio as key press dynamically
    audio.currentTime = 0;
    audio.play(); 

    const clickedKey = document.querySelector(`[data-key = "${key}"]`); //When click in key
    clickedKey.classList.add("active");

    // Remove active class after 150ms.
    setTimeout(() => {
    clickedKey.classList.remove("active");

        
    }, 150);


}


pianoKeys.forEach(key => {
    allKey.push(key.dataset.key); // Adding data key-value to allkey

    // Event Listioner --> Calling playtune function with passing datakey as arguemnt 
    key.addEventListener("click", () => playTune(key.dataset.key));
  

});




// Volume control
const handleVolume = (e) => {
    audio.volume = e.target.value;  //Passing the range slider as an audio volume


}


// Showhide control 
const showHideKey = () => {
    // Toggling hide the class list form each key
    pianoKeys.forEach(key => key.classList.toggle("hide"));

}



// Keyboard press 
const pressedKey = (e) => {
    // If pressed key is a allkey arrary then only play otherwise not
    if (allKey.includes(e.key)) {
    playTune(e.key);
   
    };

}


document.addEventListener("keydown", pressedKey);

showKey.addEventListener("click", showHideKey);
volumeSlider.addEventListener("input", handleVolume)