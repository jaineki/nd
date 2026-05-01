export class Hero {
    private container: HTMLElement
    
    constructor(parent: HTMLElement) {
        this.container = document.createElement('section')
        this.container.id = 'hero'
        parent.appendChild(this.container)
        this.render()
    }
    
    private render() {
        this.container.innerHTML = `
            <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent"></div>
                <div class="container mx-auto px-6 text-center relative z-10">
                    <div class="scroll-reveal">
                        <h1 class="text-6xl md:text-8xl font-bold mb-6">
                            <span class="gradient-text" id="typing-text"></span>
                        </h1>
                        <p class="text-xl md:text-2xl text-gray-400 mb-4">Front End Developer | Tool Creator</p>
                        <p class="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
                            I build modern web interfaces and create tools. Eager to learn, improve, and secure systems.
                        </p>
                        <div class="flex gap-4 justify-center">
                            <button class="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:scale-105 transition-transform" id="contact-btn">
                                Contact Me
                            </button>
                            <button class="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition" id="projects-btn">
                                View Projects
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `
        
        this.initTyping()
        this.initButtons()
    }
    
    private initTyping() {
        const textElement = document.getElementById('typing-text')
        const words = ['Selov Asx', 'Front End Dev', 'Tool Creator', 'System Security']
        let wordIndex = 0
        let charIndex = 0
        let isDeleting = false
        
        const type = () => {
            if (!textElement) return
            const currentWord = words[wordIndex]
            
            if (isDeleting) {
                textElement.textContent = currentWord.substring(0, charIndex - 1)
                charIndex--
            } else {
                textElement.textContent = currentWord.substring(0, charIndex + 1)
                charIndex++
            }
            
            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true
                setTimeout(type, 2000)
                return
            }
            
            if (isDeleting && charIndex === 0) {
                isDeleting = false
                wordIndex = (wordIndex + 1) % words.length
            }
            
            setTimeout(type, isDeleting ? 50 : 100)
        }
        
        type()
    }
    
    private initButtons() {
        document.getElementById('contact-btn')?.addEventListener('click', () => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        })
        
        document.getElementById('projects-btn')?.addEventListener('click', () => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        })
    }
}
