const pianoKeys = document.querySelectorAll(".piano-keys .key");
volume = document.querySelector(".volume input");
showKeys = document.querySelector(".keys-checkbox input")

let allKeys = [],
    audio = new Audio(`assets/tunes/a.wav`); 

const playTune = (key) => {
    audio.src = `assets/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active"); // add hover effect
    setTimeout(() =>{
    clickedKey.classList.remove("active"); // revome hover effect (150ms)
    }, 150)
};

const handleVolume = (e) => {
    audio.volume = e.target.value; // range slider value as an audio volume
}

pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key);
    // Calling playTune function with passing data key value as an argument
    key.addEventListener("click", ()=> playTune(key.dataset.key))
})

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}

showKeys.addEventListener("click", showHideKeys)
volume.addEventListener("input", handleVolume)
document.addEventListener("keydown", pressedKey)