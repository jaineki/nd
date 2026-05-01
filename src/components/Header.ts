export class Header {
    constructor(parent: HTMLElement) {
        const header = document.createElement('header')
        header.className = 'fixed top-0 left-0 right-0 z-50 glass'
        parent.insertBefore(header, parent.firstChild)
        this.render(header)
    }
    
    private render(header: HTMLElement) {
        header.innerHTML = `
            <div class="container mx-auto px-6 py-4">
                <div class="flex justify-between items-center">
                    <div class="text-2xl font-bold gradient-text">SELOV</div>
                    
                    <div class="hamburger">
                        <span></span><span></span><span></span>
                    </div>
                    
                    <nav class="nav-menu flex gap-8">
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
        
        this.initSmoothScroll()
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
