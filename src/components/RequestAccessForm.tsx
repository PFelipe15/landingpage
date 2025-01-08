'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Building2, Phone, Users, HardHat, Mail } from 'lucide-react'
import { toast } from 'sonner'

interface FormData {
  empresaNome: string
  telefone: string
  email: string
  numeroFuncionarios: string
  temEngenheiro: boolean
  areaAtuacao: string
}

export function RequestAccessForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    empresaNome: '',
    telefone: '',
    email: '',
    numeroFuncionarios: '',
    temEngenheiro: false,
    areaAtuacao: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Aqui você implementaria a lógica para enviar os dados
      console.log(formData)
      
      // Mostra o toast de sucesso
      toast.success('Solicitação enviada com sucesso!', {
        description: 'Entraremos em contato em breve.',
        duration: 5000,
      })
      
      // Fecha o modal após envio
      setTimeout(() => {
        onClose()
      }, 1000)
      
    } catch (error) {
      toast.error('Erro ao enviar solicitação', {
        description: 'Por favor, tente novamente mais tarde.',
      })
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Solicitar Acesso à Plataforma
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Nome da Empresa/Construtora"
                className="pl-12"
                value={formData.empresaNome}
                onChange={(e) => setFormData({...formData, empresaNome: e.target.value})}
                required
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Telefone"
                className="pl-12"
                type="tel"
                value={formData.telefone}
                onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Email"
                className="pl-12"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Número de Funcionários"
                className="pl-12"
                type="number"
                value={formData.numeroFuncionarios}
                onChange={(e) => setFormData({...formData, numeroFuncionarios: e.target.value})}
                required
              />
            </div>

            <div className="relative">
              <Input
                placeholder="Área Principal de Atuação"
                value={formData.areaAtuacao}
                onChange={(e) => setFormData({...formData, areaAtuacao: e.target.value})}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="engenheiro"
                checked={formData.temEngenheiro}
                onCheckedChange={(checked) => 
                  setFormData({...formData, temEngenheiro: checked as boolean})
                }
              />
              <label
                htmlFor="engenheiro"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Possui engenheiro na equipe?
              </label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Solicitar Acesso
          </Button>
        </form>
      </div>
    </div>
  )
} 