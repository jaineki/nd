export class Services {
    private container: HTMLElement
    private services = [
        {
            icon: '💻',
            title: 'Frontend Development',
            description: 'Modern, responsive web interfaces using latest technologies'
        },
        {
            icon: '🛠️',
            title: 'Custom Tools',
            description: 'Tailored automation tools for specific business needs'
        }
    ]
    
    constructor(parent: HTMLElement) {
        this.container = document.createElement('section')
        this.container.id = 'services'
        parent.appendChild(this.container)
        this.render()
    }
    
    private render() {
        this.container.innerHTML = `
            <div class="container mx-auto px-6 py-20 bg-white/5">
                <div class="scroll-reveal">
                    <h2 class="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">Services</h2>
                    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        ${this.services.map(service => `
                            <div class="glass p-8 text-center card-3d">
                                <div class="text-5xl mb-4">${service.icon}</div>
                                <h3 class="text-2xl font-bold mb-3">${service.title}</h3>
                                <p class="text-gray-400">${service.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `
    }
}
