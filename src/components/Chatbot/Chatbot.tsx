'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

type Message = {
  id: number
  type: 'bot' | 'user'
  text: string
  options?: {
    text: string
    value: string
  }[]
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      text: 'Olá! Sou o assistente do MEIPro. Para melhor atendê-lo, você poderia me dizer se já possui um site próprio para seu escritório contábil?',
      options: [
        { text: 'Sim, já tenho site', value: 'has_site' },
        { text: 'Não tenho site ainda', value: 'no_site' }
      ]
    }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const handleOptionClick = (value: string) => {
    // Adiciona a resposta do usuário
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      type: 'user',
      text: value === 'has_site' ? 'Sim, já tenho site' : 'Não tenho site ainda'
    }])

    // Adiciona a resposta do bot baseada na escolha
    setTimeout(() => {
      if (value === 'has_site') {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          type: 'bot',
          text: 'Ótimo! Nesse caso, posso te apresentar nossa solução de integração via API. Ela permite que você mantenha seu site atual e adicione todas as funcionalidades do MEIPro. Quer conhecer mais detalhes?',
          options: [
            { text: 'Sim, quero saber mais', value: 'api_details' },
            { text: 'Agendar demonstração', value: 'schedule_demo' }
          ]
        }])
      } else {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          type: 'bot',
          text: 'Entendi! Temos uma solução completa que inclui um site profissional + nossa plataforma de gestão. Você terá tudo que precisa em um só lugar. Quer conhecer mais sobre essa solução?',
          options: [
            { text: 'Ver plano completo', value: 'full_solution' },
            { text: 'Agendar demonstração', value: 'schedule_demo' }
          ]
        }])
      }
    }, 500)
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    setMessages(prev => [...prev, {
      id: prev.length + 1,
      type: 'user',
      text: inputMessage
    }])
    setInputMessage('')

    // Simula resposta do bot
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'bot',
        text: 'Um de nossos consultores entrará em contato em breve para fornecer mais informações!'
      }])
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botão do chatbot */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-full p-4 shadow-lg transition-shadow hover:shadow-xl flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6" />
            <span className="text-sm font-medium">Precisa de ajuda?</span>
          </>
        )}
      </motion.button>

      {/* Janela do chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Cabeçalho */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Assistente MEIPro</h3>
                  <p className="text-sm text-emerald-100">Online agora</p>
                </div>
              </div>
            </div>

            {/* Área de mensagens */}
            <div className="h-[400px] p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="flex items-start gap-2.5">
                    {message.type === 'bot' && (
                      <div className="bg-emerald-600 rounded-full p-2">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <div className={`${
                      message.type === 'bot' 
                        ? 'bg-white rounded-2xl rounded-tl-none' 
                        : 'bg-emerald-600 text-white rounded-2xl rounded-tr-none ml-auto'
                    } p-4 shadow-sm max-w-[80%]`}>
                      <p className={message.type === 'bot' ? 'text-gray-700' : 'text-white'}>
                        {message.text}
                      </p>
                      {message.options && (
                        <div className="mt-3 space-y-2">
                          {message.options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleOptionClick(option.value)}
                              className="w-full text-left px-4 py-2 text-sm text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
                            >
                              {option.text}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Área de input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
                <motion.button
                  onClick={handleSendMessage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-2.5 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <Send className="h-5 w-5" />
                </motion.button>
              </div>
              <div className="mt-2 text-center">
                <span className="text-xs text-gray-400">Powered by MEIPro AI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 