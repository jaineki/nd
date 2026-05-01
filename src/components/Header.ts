export class Header {
    private container: HTMLElement
    
    constructor(parent: HTMLElement) {
        this.container = document.createElement('header')
        this.container.className = 'fixed top-0 left-0 right-0 z-50 glass'
        parent.insertBefore(this.container, parent.firstChild)
        this.render()
        this.initSmoothScroll()
    }
    
    private render() {
        this.container.innerHTML = `
            <div class="container mx-auto px-6 py-4">
                <div class="flex justify-between items-center">
                    <div class="text-2xl font-bold gradient-text">SELOV</div>
                    
                    <div class="hamburger md:hidden">
                        <span></span><span></span><span></span>
                    </div>
                    
                    <nav class="nav-menu hidden md:flex gap-8">
                        <a href="#hero" class="hover:text-blue-400 transition">Home</a>
                        <a href="#about" class="hover:text-blue-400 transition">About</a>
                        <a href="#skills" class="hover:text-blue-400 transition">Skills</a>
                        <a href="#projects" class="hover:text-blue-400 transition">Projects</a>
                        <a href="#services" class="hover:text-blue-400 transition">Services</a>
                        <a href="#contact" class="hover:text-blue-400 transition">Contact</a>
                    </nav>
                </div>
            </div>
        `
    }
    
    private initSmoothScroll() {
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                const target = link.getAttribute('href')
                if (target) {
                    const element = document.querySelector(target)
                    element?.scrollIntoView({ behavior: 'smooth' })
                }
            })
        })
    }
}
