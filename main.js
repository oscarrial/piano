import getNoteFromKey from './noteUtils';
import './style.css'
import * as Tone from "tone"

//const synth = new Tone.Synth().toDestination();

const synth = new Tone.Sampler({
    urls: {
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();


//document.querySelector('[data-note="C4"]').addEventListener('click', () => playNote('C4'))
//document.querySelector('[data-note="D4"]').addEventListener('click', () => playNote('D4'))

let keys = document.querySelectorAll('.key')
for (let key of keys) {
    let noteToPlay = key.getAttribute('data-note')
    key.addEventListener('mousedown', () => playNote(noteToPlay))
    key.addEventListener('mouseup', () => stopNote())
    key.addEventListener('mouseleave', () => stopNote())
}

document.addEventListener('keypress', ctrlTeclado)
document.addEventListener('keyup', stopNote)

function ctrlTeclado(event) {
    let key = event.key
    let note = getNoteFromKey(keyName)
    playNote[note]
}

function playNote(note) {

    synth.triggerAttackRelease(note);
}

function stopNote() {
    synth.triggerRelease();
}