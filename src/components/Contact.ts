export class Contact {
    private container: HTMLElement
    private contacts = [
        { platform: 'Telegram', username: '@CerusAint', url: 'https://t.me/CerusAint', icon: '💬' },
        { platform: 'Facebook', username: 'quart.hade', url: 'https://facebook.com/quart.hade', icon: '📘' },
        { platform: 'WhatsApp', username: '+639243901969', url: 'https://wa.me/639243901969', icon: '📱' }
    ]
    
    constructor(parent: HTMLElement) {
        this.container = document.createElement('section')
        this.container.id = 'contact'
        parent.appendChild(this.container)
        this.render()
        this.initForm()
    }
    
    private render() {
        this.container.innerHTML = `
            <div class="container mx-auto px-6 py-20">
                <div class="scroll-reveal">
                    <h2 class="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">Contact Me</h2>
                    <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <h3 class="text-2xl font-bold mb-6">Connect With Me</h3>
                            <div class="space-y-4">
                                ${this.contacts.map(contact => `
                                    <a href="${contact.url}" target="_blank" class="glass p-4 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform block">
                                        <div class="text-3xl">${contact.icon}</div>
                                        <div>
                                            <div class="font-bold">${contact.platform}</div>
                                            <div class="text-sm text-gray-400">${contact.username}</div>
                                        </div>
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold mb-6">Send Message</h3>
                            <form id="contact-form" class="space-y-4">
                                <input type="text" id="name" placeholder="Your Name" class="w-full px-4 py-3 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-blue-500">
                                <input type="email" id="email" placeholder="Your Email" class="w-full px-4 py-3 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-blue-500">
                                <textarea id="message" rows="4" placeholder="Your Message" class="w-full px-4 py-3 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-blue-500"></textarea>
                                <button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:scale-105 transition-transform font-semibold">
                                    Send Message →
                                </button>
                            </form>
                            <div id="form-status" class="mt-4 text-center hidden"></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
    
    private initForm() {
        const form = document.getElementById('contact-form')
        form?.addEventListener('submit', async (e) => {
            e.preventDefault()
            const name = (document.getElementById('name') as HTMLInputElement).value
            const email = (document.getElementById('email') as HTMLInputElement).value
            const message = (document.getElementById('message') as HTMLTextAreaElement).value
            
            const status = document.getElementById('form-status')
            if (status) {
                status.textContent = 'Sending...'
                status.classList.remove('hidden')
                
                // Simulate sending (in production, use email service)
                setTimeout(() => {
                    status.textContent = '✅ Message sent! I\'ll get back to you soon.'
                    status.className = 'mt-4 text-center text-green-400'
                    form.reset()
                    setTimeout(() => {
                        status.classList.add('hidden')
                    }, 5000)
                }, 1500)
            }
        })
    }
}
