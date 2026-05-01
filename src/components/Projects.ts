export class Projects {
    private container: HTMLElement
    private projects = [
        {
            title: 'Autobot',
            description: 'AI Automation Tool',
            link: 'https://autobotnsekako.onrender.com/',
            image: 'https://via.placeholder.com/400x250/1a1a2e/ffffff?text=Autobot'
        },
        {
            title: 'Spam Share',
            description: 'Viral Share Tool',
            link: 'https://shareselov.onrender.com/',
            image: 'https://via.placeholder.com/400x250/1a1a2e/ffffff?text=Spam+Share'
        },
        {
            title: 'Coming Soon',
            description: 'New Tool in Development',
            link: '#',
            image: 'https://via.placeholder.com/400x250/1a1a2e/ffffff?text=Coming+Soon',
            upcoming: true
        },
        {
            title: 'Coming Soon',
            description: 'New Tool in Development',
            link: '#',
            image: 'https://via.placeholder.com/400x250/1a1a2e/ffffff?text=Coming+Soon',
            upcoming: true
        }
    ]
    
    constructor(parent: HTMLElement) {
        this.container = document.createElement('section')
        this.container.id = 'projects'
        parent.appendChild(this.container)
        this.render()
    }
    
    private render() {
        this.container.innerHTML = `
            <div class="container mx-auto px-6 py-20">
                <div class="scroll-reveal">
                    <h2 class="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">My Projects</h2>
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6" id="projects-grid">
                        ${this.projects.map((project, index) => `
                            <div class="card-3d glass p-6 transition-all hover:scale-105" data-project="${index}">
                                <div class="relative overflow-hidden rounded-lg mb-4">
                                    <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                                    ${project.upcoming ? '<span class="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">Upcoming</span>' : ''}
                                </div>
                                <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                                <p class="text-gray-400 mb-4">${project.description}</p>
                                <a href="${project.link}" target="${project.upcoming ? '_self' : '_blank'}" class="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:scale-105 transition-transform ${project.upcoming ? 'opacity-50 cursor-not-allowed' : ''}">
                                    ${project.upcoming ? 'Coming Soon' : 'Live Demo →'}
                                </a>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `
    }
}
