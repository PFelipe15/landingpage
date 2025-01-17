'use client'

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Building2, Mail, Phone, Users, Globe, Calculator } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

interface FormData {
  empresaNome: string
  telefone: string
  email: string
  numeroClientes: string
  possuiSite: boolean
  numeroContadores: string
  areaAtuacao: string
  temSoftwareContabil: boolean
}

export function RequestAccessForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    empresaNome: '',
    telefone: '',
    email: '',
    numeroClientes: '',
    possuiSite: false,
    numeroContadores: '',
    areaAtuacao: '',
    temSoftwareContabil: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      console.log(formData)
      toast.success('Solicitação enviada com sucesso!', {
        description: 'Entraremos em contato em breve.',
        duration: 5000,
      })
      setTimeout(() => {
        onClose()
      }, 1000)
    } catch (error) {
      console.error('Erro ao enviar solicitação', error)
      toast.error('Erro ao enviar solicitação', {
        description: 'Por favor, tente novamente mais tarde.',
      })
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-background rounded-2xl p-8 max-w-md w-full mx-4 relative border border-border shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          ✕
        </button>
        
        <div className="mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4">
            Solicitar Acesso
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            Multiplique suas aberturas de MEI
          </h2>
          <p className="text-muted-foreground mt-2">
            Transforme seu escritório contábil com nossa plataforma gamificada
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Nome do Escritório Contábil"
                className="pl-12 bg-muted/50 border-muted"
                value={formData.empresaNome}
                onChange={(e) => setFormData({...formData, empresaNome: e.target.value})}
                required
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Telefone Comercial"
                className="pl-12 bg-muted/50 border-muted"
                type="tel"
                value={formData.telefone}
                onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Email Profissional"
                className="pl-12 bg-muted/50 border-muted"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Número de Clientes Ativos"
                className="pl-12 bg-muted/50 border-muted"
                type="number"
                value={formData.numeroClientes}
                onChange={(e) => setFormData({...formData, numeroClientes: e.target.value})}
                required
              />
            </div>

            <div className="relative">
              <Calculator className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Número de Contadores na Equipe"
                className="pl-12 bg-muted/50 border-muted"
                type="number"
                value={formData.numeroContadores}
                onChange={(e) => setFormData({...formData, numeroContadores: e.target.value})}
                required
              />
            </div>

            <div className="flex items-center space-x-2 bg-muted/50 p-4 rounded-lg">
              <Globe className="w-5 h-5 text-muted-foreground" />
              <Checkbox
                id="possuiSite"
                checked={formData.possuiSite}
                onCheckedChange={(checked) => 
                  setFormData({...formData, possuiSite: checked as boolean})
                }
                className="border-muted-foreground data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
              />
              <label
                htmlFor="possuiSite"
                className="text-sm font-medium text-foreground"
              >
                Já possui site institucional?
              </label>
            </div>

            <div className="flex items-center space-x-2 bg-muted/50 p-4 rounded-lg">
              <Calculator className="w-5 h-5 text-muted-foreground" />
              <Checkbox
                id="temSoftware"
                checked={formData.temSoftwareContabil}
                onCheckedChange={(checked) => 
                  setFormData({...formData, temSoftwareContabil: checked as boolean})
                }
                className="border-muted-foreground data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
              />
              <label
                htmlFor="temSoftware"
                className="text-sm font-medium text-foreground"
              >
                Utiliza software contábil?
              </label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-colors py-6 text-lg rounded-xl"
          >
            Solicitar Demonstração
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Ao solicitar acesso, você concorda com nossos{' '}
            <a href="#" className="text-emerald-600 hover:underline">Termos de Uso</a>
            {' '}e{' '}
            <a href="#" className="text-emerald-600 hover:underline">Política de Privacidade</a>
          </p>
        </form>
      </div>
    </div>
  )
} 