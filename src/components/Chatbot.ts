export class ChatBot {
    private container: HTMLElement
    private isOpen: boolean = false
    private API_URL = '/api/chat'
    
    constructor(parent: HTMLElement) {
        this.container = document.createElement('div')
        this.container.className = 'chat-widget'
        parent.appendChild(this.container)
        this.render()
    }
    
    private render() {
        this.container.innerHTML = `
            <button class="chat-toggle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
            </button>
            <div class="chat-window">
                <div class="p-4 bg-gradient-to-r from-blue-600 to-purple-600">
                    <h3 class="font-bold">SELOV AI Assistant</h3>
                    <p class="text-sm opacity-80">Powered by Advanced AI</p>
                </div>
                <div class="flex-1 overflow-y-auto p-4" id="chat-messages"></div>
                <div class="p-4 border-t border-white/10">
                    <div class="flex gap-2">
                        <input type="text" id="chat-input" placeholder="Ask me anything..." class="flex-1 px-3 py-2 bg-white/10 rounded-lg border border-white/20 focus:outline-none">
                        <button id="chat-send" class="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">Send</button>
                    </div>
                </div>
            </div>
        `
        
        this.initEvents()
        this.addWelcomeMessage()
    }
    
    private initEvents() {
        const toggle = this.container.querySelector('.chat-toggle')
        const chatWindow = this.container.querySelector('.chat-window')
        const input = this.container.querySelector('#chat-input') as HTMLInputElement
        const send = this.container.querySelector('#chat-send')
        
        toggle?.addEventListener('click', () => {
            this.isOpen = !this.isOpen
            chatWindow?.classList.toggle('open')
        })
        
        const sendMessage = async () => {
            const message = input?.value.trim()
            if (!message) return
            
            this.addMessage(message, true)
            input.value = ''
            this.showTyping()
            
            try {
                const response = await fetch(`${this.API_URL}?query=${encodeURIComponent(message)}`)
                const data = await response.json()
                this.removeTyping()
                this.addMessage(data.response || data.reply || "I'm here to help!", false)
            } catch (error) {
                this.removeTyping()
                this.addMessage("⚠️ Connection error. Please try again.", false)
            }
        }
        
        send?.addEventListener('click', sendMessage)
        input?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage()
        })
    }
    
    private addMessage(text: string, isUser: boolean) {
        const messagesDiv = this.container.querySelector('#chat-messages')
        const messageDiv = document.createElement('div')
        messageDiv.className = `mb-3 ${isUser ? 'text-right' : 'text-left'}`
        messageDiv.innerHTML = `
            <div class="inline-block px-4 py-2 rounded-lg ${isUser ? 'bg-blue-600' : 'bg-white/10'}">
                ${this.escapeHtml(text)}
            </div>
        `
        messagesDiv?.appendChild(messageDiv)
        messagesDiv?.scrollTo({ top: messagesDiv.scrollHeight, behavior: 'smooth' })
    }
    
    private escapeHtml(text: string): string {
        const div = document.createElement('div')
        div.textContent = text
        return div.innerHTML
    }
    
    private addWelcomeMessage() {
        setTimeout(() => {
            this.addMessage("Hello! I'm SELOV AI. How can I help you today?", false)
        }, 500)
    }
    
    private showTyping() {
        const messagesDiv = this.container.querySelector('#chat-messages')
        const typingDiv = document.createElement('div')
        typingDiv.id = 'typing-indicator'
        typingDiv.className = 'text-left mb-3'
        typingDiv.innerHTML = '<div class="inline-block px-4 py-2 rounded-lg bg-white/10">Typing<span class="dots">...</span></div>'
        messagesDiv?.appendChild(typingDiv)
        messagesDiv?.scrollTo({ top: messagesDiv.scrollHeight, behavior: 'smooth' })
    }
    
    private removeTyping() {
        const typing = this.container.querySelector('#typing-indicator')
        typing?.remove()
    }
}
