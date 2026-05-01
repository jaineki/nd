import './styles.css'
import { App } from './core/App'
import { Effects } from './animations/Effects'

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    const app = new App()
    app.init()
    
    // Initialize 3D Effects
    const effects = new Effects()
    effects.init()
    
    // Remove loader
    setTimeout(() => {
        const loader = document.querySelector('.loader')
        if (loader) loader.classList.add('hidden')
    }, 1500)
})

// Audio interaction
let audio: HTMLAudioElement | null = null
let audioStarted = false

const startAudio = () => {
    if (!audioStarted && audio) {
        audio.play().catch(() => console.log('Audio play failed'))
        audioStarted = true
        document.removeEventListener('click', startAudio)
        document.removeEventListener('scroll', startAudio)
    }
}

document.addEventListener('click', startAudio)
document.addEventListener('scroll', startAudio)

// Load audio
setTimeout(() => {
    audio = new Audio('https://raw.githubusercontent.com/Tuxedoun/Nn/4c60fdbf78292b82c5c03e04923acccc74e4bd5e/cry.mp3')
    audio.loop = true
    audio.volume = 0.3
}, 1000)
