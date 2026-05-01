export class About {
    private container: HTMLElement
    
    constructor(parent: HTMLElement) {
        this.container = document.createElement('section')
        this.container.id = 'about'
        parent.appendChild(this.container)
        this.render()
    }
    
    private render() {
        this.container.innerHTML = `
            <div class="container mx-auto px-6 py-20">
                <div class="scroll-reveal">
                    <h2 class="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">About Me</h2>
                    <div class="max-w-3xl mx-auto text-center">
                        <p class="text-gray-300 mb-6 leading-relaxed">
                            I'm Selov Asx, a passionate Front End Developer and Tool Creator with a focus on 
                            building modern web interfaces and creating innovative tools.
                        </p>
                        <p class="text-gray-400 leading-relaxed">
                            I'm constantly eager to learn new technologies, improve my skills, 
                            and ensure system security. My goal is to create solutions that help 
                            both gamers and businesses succeed in the digital space.
                        </p>
                    </div>
                </div>
            </div>
        `
    }
}
