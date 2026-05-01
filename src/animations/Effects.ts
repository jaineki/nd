export class Effects {
    private cursor: HTMLElement | null = null
    private cursorFollower: HTMLElement | null = null
    
    init() {
        this.createCustomCursor()
        this.initParallax()
        this.init3DCards()
    }
    
    private createCustomCursor() {
        this.cursor = document.createElement('div')
        this.cursor.className = 'cursor'
        this.cursorFollower = document.createElement('div')
        this.cursorFollower.className = 'cursor-follower'
        
        document.body.appendChild(this.cursor)
        document.body.appendChild(this.cursorFollower)
        
        document.addEventListener('mousemove', (e) => {
            if (this.cursor) {
                this.cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
            }
            setTimeout(() => {
                if (this.cursorFollower) {
                    this.cursorFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
                }
            }, 50)
        })
    }
    
    private initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset
            const parallaxElements = document.querySelectorAll('.parallax')
            parallaxElements.forEach((el: Element) => {
                const speed = (el as HTMLElement).dataset.speed || '0.5'
                const yPos = scrolled * parseFloat(speed)
                ;(el as HTMLElement).style.transform = `translateY(${yPos}px)`
            })
        })
    }
    
    private init3DCards() {
        const cards = document.querySelectorAll('.card-3d')
        cards.forEach((card: Element) => {
            card.addEventListener('mousemove', (e: MouseEvent) => {
                const rect = (card as HTMLElement).getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = (y - centerY) / 20
                const rotateY = (centerX - x) / 20
                
                ;(card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`
            })
            
            card.addEventListener('mouseleave', () => {
                ;(card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)'
            })
        })
    }
}
