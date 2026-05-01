export class Skills {
    private container: HTMLElement
    private skills = [
        { name: 'HTML5', level: 50 },
        { name: 'CSS3', level: 60 },
        { name: 'JavaScript', level: 40 },
        { name: 'Python', level: 55 },
        { name: 'Node.js', level: 58 },
        { name: 'Git', level: 89 }
    ]
    
    constructor(parent: HTMLElement) {
        this.container = document.createElement('section')
        this.container.id = 'skills'
        parent.appendChild(this.container)
        this.render()
        this.animateBars()
    }
    
    private render() {
        this.container.innerHTML = `
            <div class="container mx-auto px-6 py-20 bg-white/5">
                <div class="scroll-reveal">
                    <h2 class="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">Technical Skills</h2>
                    <div class="max-w-3xl mx-auto" id="skills-container">
                        ${this.skills.map(skill => `
                            <div class="mb-6">
                                <div class="flex justify-between mb-2">
                                    <span class="font-semibold">${skill.name}</span>
                                    <span class="text-gray-400">${skill.level}%</span>
                                </div>
                                <div class="skill-bar-container">
                                    <div class="skill-bar-fill" data-level="${skill.level}"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `
    }
    
    private animateBars() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bars = entry.target.querySelectorAll('.skill-bar-fill')
                    bars.forEach(bar => {
                        const level = bar.getAttribute('data-level')
                        if (level) {
                            (bar as HTMLElement).style.width = `${level}%`
                        }
                    })
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.5 })
        
        observer.observe(this.container)
    }
}
