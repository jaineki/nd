import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Services } from '../components/Services'
import { Contact } from '../components/Contact'
import { ChatBot } from '../components/ChatBot'
import { Header } from '../components/Header'

export class App {
    private container: HTMLElement
    
    constructor() {
        this.container = document.getElementById('app')!
    }
    
    init() {
        // Clear loading
        this.container.innerHTML = ''
        
        // Render all components
        new Header(this.container)
        new Hero(this.container)
        new About(this.container)
        new Skills(this.container)
        new Projects(this.container)
        new Services(this.container)
        new Contact(this.container)
        new ChatBot(this.container)
        
        // Initialize scroll animations
        this.initScrollAnimations()
        this.initThemeToggle()
        this.initHamburger()
    }
    
    private initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        }, { threshold: 0.1 })
        
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el)
        })
    }
    
    private initThemeToggle() {
        const toggle = document.createElement('div')
        toggle.className = 'theme-toggle'
        toggle.innerHTML = '<span>🌓</span>'
        toggle.onclick = () => {
            document.body.classList.toggle('light')
        }
        document.body.appendChild(toggle)
    }
    
    private initHamburger() {
        const hamburger = document.querySelector('.hamburger')
        const navMenu = document.querySelector('.nav-menu')
        
        hamburger?.addEventListener('click', () => {
            hamburger.classList.toggle('active')
            navMenu?.classList.toggle('active')
        })
    }
}
