const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;


function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
        .filter(vioce => vioce.lang.includes('en'))
        .map(vioce => `<option value="${vioce.name}">${vioce.name} (${vioce.lang})</option>`)
        .join('');
}


function toggle(startOver = true) {
    speechSynthesis.cancel()
    if (startOver) {
        speechSynthesis.speak(msg)
    }
}


function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value)
    toggle()
}

function setOption() {
    console.log(this.value)
    msg[this.name] = this.value
    toggle()
}


speechSynthesis.addEventListener('voiceschanged', populateVoices)
speakButton.addEventListener('click', toggle)
stopButton.addEventListener('click', function() {
    toggle(false)
})
voicesDropdown.addEventListener('change', setVoice)
options.forEach(option => option.addEventListener('change', setOption))