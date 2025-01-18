'use client'

import Logo from '@/components/Logo'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { ArrowRight, Building2, CheckCircle, Menu, Users, MessageSquare, Shield, Headphones } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
 
import { RequestAccessForm } from '@/components/RequestAccessForm'
import { VideoModal } from '@/components/video-modal'
import Chatbot from '@/components/Chatbot/Chatbot'

const IMAGES = {
  hero: '/figuras/hero.svg',
   gamification: '/figuras/hero_2.svg',
  atendimento: '/figuras/atendimento-interno.svg',
  suporte: '/figuras/suporte.svg',
  digital: '/figuras/cemporcentodigital.svg',
  messageBot: '/figuras/message_bot.svg',
  robot: '/figuras/robot.svg'
}

// Adicione estas constantes para os recursos
const FEATURES = [
  {
    icon: Users,
    title: "Portal do Cliente Gamificado",
    description: "Experiência gamificada que transforma a abertura de MEI em uma jornada envolvente",
    color: "emerald",
    benefits: [
      "Sistema de conquistas e recompensas",
      "Interface intuitiva e moderna",
      "Passo a passo interativo",
      "Coleta de documentos simplificada"
    ]
  },
  {
    icon: Building2,
    title: "Painel Administrativo",
    description: "Controle total do processo para sua equipe contábil",
    color: "green",
    benefits: [
      "Dashboard em tempo real",
      "Gestão de múltiplos clientes",
      "Automação de documentos",
      "Relatórios detalhados"
    ]
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automatizado",
    description: "Bot inteligente que guia seus clientes na abertura do MEI via WhatsApp",
    color: "emerald",
    benefits: [
      "Atendimento 24/7",
      "Coleta automática de dados",
      "Integração com CRM",
      "Notificações automáticas"
    ]
  }
]

const BENEFITS = [
  {
    title: "Experiência Gamificada Única",
    description: "Transformamos a burocracia em uma jornada divertida e envolvente para seus clientes",
    icon: "🎮",
    features: [
      "Sistema de conquistas e recompensas",
      "Progresso visual interativo",
      "Missões que simplificam cada etapa"
    ]
  },
  {
    title: "Engajamento do Cliente",
    description: "Seus clientes se mantêm motivados e participativos durante todo o processo",
    icon: "🏆",
    features: [
      "Feedback instantâneo das ações",
      "Celebração de cada etapa concluída",
      "Interface intuitiva e amigável"
    ]
  },
  {
    title: "Processo Simplificado",
    description: "A gamificação torna o processo mais leve e compreensível",
    icon: "🎯",
    features: [
      "Linguagem simples e clara",
      "Tutoriais interativos",
      "Dicas e orientações contextuais"
    ]
  }
]

// Adicione esta nova constante para os passos do processo
const PROCESS_STEPS = [
  {
    title: "Jornada 100% Digital",
    description: "Todo o processo de abertura do MEI é realizado de forma digital, sem necessidade de papéis ou visitas presenciais.",
    image: IMAGES.digital,
    features: [
      "Preenchimento inteligente de formulários",
      "Upload de documentos simplificado",
      "Assinatura digital integrada"
    ]
  },
  {
    title: "Atendimento Interno Eficiente",
    description: "Sua equipe conta com um painel administrativo completo para gerenciar todos os processos em andamento.",
    image: IMAGES.atendimento,
    features: [
      "Dashboard centralizado",
      "Acompanhamento em tempo real",
      "Automação de tarefas repetitivas"
    ]
  },
  {
    title: "Suporte Especializado",
    description: "Oferecemos suporte técnico e contábil para garantir uma experiência tranquila do início ao fim.",
    image: IMAGES.suporte,
    features: [
      "Atendimento humanizado",
      "Resolução rápida de dúvidas",
      "Acompanhamento personalizado"
    ]
  }
]

export default function LandingPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [showDemo, setShowDemo] = useState(false)
  const [showRequestForm, setShowRequestForm] = useState(false)
  const images = [
    { src: IMAGES.hero, alt: "Jornada de Abertura de MEI" },
    { src: IMAGES.gamification, alt: "Dashboard Administrativo" }
  ]
  const [isScrolled, setIsScrolled] = useState(false)

  // Detecta scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Efeito para alternar as imagens
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0))
    }, 5000) // Troca a cada 5 segundos

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Elementos decorativos globais */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Blob superior direito */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        {/* Blob inferior esquerdo */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header com elemento decorativo */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo com efeito hover */}
            <Link 
              href="/" 
              className="relative group"
            >
              <div className="flex items-center gap-2">
                <Logo height={65} width={175} />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </Link>

            {/* Menu Principal com Design Moderno */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center bg-emerald-50/80 backdrop-blur-md rounded-full px-6 py-2 mr-6 shadow-sm">
                {['Recursos', 'Benefícios', 'Depoimentos'].map((item, index) => (
                  <Link
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="relative px-5 py-2 text-[15px] font-medium text-gray-700 hover:text-emerald-600 transition-all duration-300 group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                  </Link>
                ))}
              </div>

              {/* Botões de Ação Redesenhados */}
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost"
                  onClick={() => setShowRequestForm(true)}
                  className="relative overflow-hidden group px-6 py-2 text-[15px] font-medium"
                >
                  <span className="relative z-10 text-gray-700 group-hover:text-white transition-colors duration-300">
                    Solicitar Acesso
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Button>
                <Button 
                  className="relative overflow-hidden group bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 text-white rounded-full px-6 py-2 text-[15px] font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Começar Grátis
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>
            </nav>

            {/* Menu Mobile Redesenhado */}
            <button className="lg:hidden relative group p-3">
              <Menu className="w-6 h-6 text-gray-700 group-hover:text-emerald-600 transition-colors" />
              <div className="absolute inset-0 bg-emerald-50 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300"></div>
            </button>
          </div>
        </div>

        {/* Elementos Decorativos Modernos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Linha superior com gradiente animado */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-shimmer"></div>
          
          {/* Elementos flutuantes */}
          <div className="absolute -top-10 right-1/4 w-20 h-20 bg-emerald-200/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute -top-5 left-1/3 w-16 h-16 bg-emerald-100/20 rounded-full blur-2xl animate-float-delayed"></div>
          
          {/* Partículas decorativas */}
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-emerald-400/40 rounded-full animate-ping"></div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 to-white"></div>
          
          {/* Elementos decorativos animados */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 space-y-8"
              >
                <div className="space-y-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium">
                    Para Escritórios de Contabilidade Online
                  </span>
                  
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="text-gray-900">
                        Quer multiplicar suas
                      </span>
                      <br />
                      <span className="bg-gradient-to-r from-emerald-900 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                        aberturas de MEI?
                      </span>
                    </h1>
                    
                    <div className="flex flex-col gap-4">
                      <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                        O STEP.MEI automatiza todo o processo de abertura, permitindo que seu escritório:
                      </p>
                      
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-gray-700">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-lg">Atenda 3x mais clientes com a mesma equipe</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-lg">Reduza em 70% o tempo de abertura</span>
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-lg">Ofereça uma experiência moderna aos clientes</span>
                        </li>
                      </ul>

                      {/* Destaque WhatsApp */}
                      <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 mt-4">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">📱</span>
                          <h3 className="text-lg font-semibold text-emerald-700">Novo: Abertura via WhatsApp</h3>
                        </div>
                        <p className="text-emerald-600 mb-3">
                          Automatize todo o processo de abertura com nosso bot inteligente
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-emerald-100 rounded-full text-sm text-emerald-600">
                            Atendimento 24/7
                          </span>
                          <span className="px-3 py-1 bg-emerald-100 rounded-full text-sm text-emerald-600">
                            100% Automatizado
                          </span>
                          <span className="px-3 py-1 bg-emerald-100 rounded-full text-sm text-emerald-600">
                            Integração com CRM
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        Aumentar Minhas Aberturas
                        <ArrowRight className="ml-2 animate-bounce" />
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline"
                        onClick={() => setShowDemo(true)}
                        className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg rounded-full group"
                      >
                        <span className="group-hover:scale-105 transition-transform inline-flex items-center">
                          Ver Demonstração
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="ml-2"
                          >
                            👉
                          </motion.span>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Área direita com troca de imagens */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 relative"
              >
                <div className="relative h-[500px] w-full">
                  {images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: currentImage === index ? 1 : 0,
                        y: currentImage === index ? 0 : 20,
                      }}
                      transition={{ duration: 0.5 }}
                      className={`absolute inset-0 ${currentImage === index ? 'z-10' : 'z-0'}`}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/20 to-transparent rounded-2xl"></div>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={600}
                          height={400}
                          className="w-full object-contain max-h-[600px] rounded-xl drop-shadow-xl"
                        />
                      </div>
                    </motion.div>
                  ))}

                  {/* Preview do WhatsApp sobreposto */}
                  <div className="absolute -right-8 top-8 w-64 bg-white rounded-2xl shadow-xl p-3 transform rotate-6 hover:rotate-0 transition-transform z-20">
                    <div className="bg-emerald-500 text-white rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <Image
                          src={IMAGES.robot}
                          alt="Bot Avatar"
                          width={24}
                          height={24}
                        />
                        <span className="text-sm font-medium">StepMEI Bot</span>
                      </div>
                    </div>
                    <div className="mt-2 space-y-2">
                      <div className="bg-emerald-100 rounded-lg p-2">
                        <p className="text-xs">Olá! Vamos abrir seu MEI?</p>
                      </div>
                    </div>
                  </div>

                  {/* Indicadores de slide */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`transition-all duration-300 ${
                          currentImage === index 
                            ? 'w-8 h-2 bg-emerald-600' 
                            : 'w-2 h-2 bg-emerald-300 hover:bg-emerald-400'
                        } rounded-full`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nova seção de benefícios */}
        <section className="py-20 bg-gradient-to-b from-white to-emerald-50/50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium mb-4">
                Solução Completa
              </span>
              <h2 className="text-4xl font-bold text-emerald-900 mb-4">
                Três Maneiras de Multiplicar suas Aberturas
              </h2>
              <p className="text-xl text-emerald-600 max-w-3xl mx-auto">
                Uma plataforma completa que combina gamificação, gestão eficiente e automação via WhatsApp
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 h-full">
                    {/* Ícone */}
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center`}>
                        <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                      </div>
                    </div>
                    
                    {/* Título e Descrição */}
                    <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {feature.description}
                    </p>

                    {/* Lista de Benefícios */}
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-emerald-600" />
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Botão "Saiba mais" */}
                    <div className="mt-8 pt-4 border-t border-emerald-100">
                      <Button
                        variant="ghost"
                        className="text-emerald-600 hover:text-emerald-700 p-0 flex items-center gap-2 group"
                        onClick={() => setShowDemo(true)}
                      >
                        Saiba mais
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-16"
            >
              <div className="bg-emerald-50 p-8 rounded-2xl inline-block">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                  Pronto para revolucionar seu escritório contábil?
                </h3>
                <p className="text-emerald-600 mb-6">
                  Combine estas três soluções poderosas e multiplique suas aberturas de MEI
                </p>
                <Button 
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
                  onClick={() => setShowRequestForm(true)}
                >
                  Começar Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção Como Funciona */}
        <section className="py-20 bg-white" id="como-funciona">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-emerald-900 mb-4">
                Como o STEP.MEI Funciona
              </h2>
              <p className="text-xl text-emerald-600 max-w-2xl mx-auto">
                Uma plataforma completa que simplifica todo o processo de abertura do MEI
              </p>
            </motion.div>

            <div className="space-y-24">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
                >
                  {/* Conteúdo */}
                  <div className="md:w-1/2 space-y-6">
                    <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium">
                      Etapa {index + 1}
                    </div>
                    <h3 className="text-3xl font-bold text-emerald-900">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {step.description}
                    </p>
                    <ul className="space-y-4">
                      {step.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Imagem */}
                  <div className="md:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/20 to-transparent rounded-2xl"></div>
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={600}
                        height={400}
                        className="w-full object-contain max-h-[400px] rounded-xl drop-shadow-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-emerald-50/20 rounded-2xl"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

          
          </div>
        </section>

      

        {/* Seção WhatsApp Integration com mais destaque */}
        <section className="py-24 bg-gradient-to-b from-emerald-50/50 to-white relative overflow-hidden">
          {/* Elementos decorativos de fundo */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-emerald-50/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                NOVO RECURSO
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
                Automatize suas Aberturas de MEI via WhatsApp
              </h2>
              <p className="text-xl text-emerald-600 mb-8">
                Combine a experiência gamificada com a praticidade do WhatsApp para multiplicar suas aberturas de MEI
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-emerald-700">Atendimento 24/7</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-emerald-700">100% Automatizado</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-emerald-700">Integração com CRM</span>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Cards de recursos principais */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <Image
                        src={IMAGES.robot}
                        alt="Bot Icon"
                        width={40}
                        height={40}
                        className="transform hover:rotate-12 transition-transform"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-900 mb-3">
                        Automação Inteligente
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Bot que guia seus clientes em todo o processo de abertura, coletando documentos e informações necessárias automaticamente.
                      </p>
                      <ul className="space-y-3">
                        {[
                          'Coleta automática de documentos',
                          'Validação em tempo real',
                          'Instruções passo a passo',
                          'Notificações automáticas'
                        ].map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                              <CheckCircle className="w-3 h-3 text-emerald-600" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card de Gestão */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <Image
                        src={IMAGES.messageBot}
                        alt="Message Bot Icon"
                        width={40}
                        height={40}
                        className="transform hover:rotate-12 transition-transform"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-900 mb-3">
                        Gestão Centralizada
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Acompanhe todas as aberturas em um painel unificado com métricas e relatórios em tempo real.
                      </p>
                      <ul className="space-y-3">
                        {[
                          'Dashboard em tempo real',
                          'Relatórios detalhados',
                          'Métricas de conversão',
                          'Histórico completo'
                        ].map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                              <CheckCircle className="w-3 h-3 text-emerald-600" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                    onClick={() => setShowRequestForm(true)}
                  >
                    <span className="flex items-center justify-center gap-3">
                      Começar Agora
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Button>
                </div>
              </motion.div>

              {/* Mock do WhatsApp */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl shadow-xl p-4 max-w-sm mx-auto transform hover:scale-105 transition-all duration-300">
                  <div className="bg-emerald-500 text-white rounded-t-2xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <Image
                          src={IMAGES.robot}
                          alt="Bot Avatar"
                          width={30}
                          height={30}
                          className="animate-bounce"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">StepMEI Bot</h4>
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-100"></span>
                          </span>
                          <span className="text-sm text-emerald-100">Online agora</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 p-4">
                    <div className="bg-emerald-100 rounded-lg p-3 max-w-[80%] animate-fade-in-up">
                      <p className="text-sm">Olá! Sou o assistente virtual da StepMEI. Como posso ajudar com sua abertura de MEI?</p>
                    </div>
                    
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] ml-auto animate-fade-in-up delay-300">
                      <p className="text-sm">Quero abrir meu MEI</p>
                    </div>
                    
                    <div className="bg-emerald-100 rounded-lg p-3 max-w-[80%] animate-fade-in-up delay-500">
                      <p className="text-sm">Ótimo! Vou te guiar em todo o processo de forma gamificada. Primeiro, preciso de alguns dados básicos...</p>
                    </div>
                  </div>
                </div>

                {/* Elementos decorativos */}
                <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-emerald-100/20 to-transparent rounded-3xl transform rotate-3"></div>
                <div className="absolute -z-20 inset-0 bg-gradient-to-bl from-emerald-50/30 to-transparent rounded-3xl transform -rotate-3"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Seção de Planos - Destaque Final */}
        <section className="py-24 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
          {/* Elementos decorativos de fundo */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Cabeçalho da seção */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 rounded-full text-emerald-800 text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  Escolha seu Plano
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
                  Comece a Transformar seu Escritório Hoje
                </h2>
                <p className="text-xl text-emerald-600">
                  Todas as soluções incluem nossa plataforma gamificada e bot do WhatsApp
                </p>
              </motion.div>
            </div>

            {/* Cards de Planos */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Plano 1: Já tem site */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-emerald-100">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-3xl">🌐</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-emerald-900">Integração</h3>
                        <p className="text-emerald-600">Para quem já tem site</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <p className="text-gray-600">
                        Integre nossas soluções ao seu site atual e multiplique suas aberturas de MEI
                      </p>
                      
                      <div className="space-y-3">
                        {[
                          'Plataforma Gamificada Completa',
                          'Bot WhatsApp Automatizado',
                          'Painel Administrativo',
                          'API de Integração',
                          'Suporte Técnico Especializado'
                        ].map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                              <CheckCircle className="w-3 h-3 text-emerald-600" />
                            </div>
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-600 h-14 text-lg font-medium rounded-xl transition-colors"
                      onClick={() => setShowRequestForm(true)}
                    >
                      Conhecer Integração
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Plano 2: Solução Completa */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full">
                      Mais Popular
                    </span>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-3xl">⚡</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Solução Completa</h3>
                        <p className="text-emerald-100">Site + Plataforma + WhatsApp</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <p className="text-emerald-100">
                        A solução completa para escritórios que querem se destacar no mercado
                      </p>
                      
                      <div className="space-y-3">
                        {[
                          'Site Profissional Personalizado',
                          'Plataforma Gamificada Integrada',
                          'Bot WhatsApp Automatizado',
                          'Painel Administrativo Completo',
                          'Hospedagem Incluída',
                          'Suporte Prioritário 24/7'
                        ].map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-white">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full bg-white hover:bg-emerald-50 text-emerald-600 h-14 text-lg font-medium rounded-xl transition-colors"
                      onClick={() => setShowRequestForm(true)}
                    >
                      Começar Agora
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Seção de garantias e confiança */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-wrap justify-center gap-8 bg-white/50 backdrop-blur-sm px-8 py-6 rounded-2xl">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-700">Garantia de 14 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-700">+500 escritórios confiam</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-700">Suporte especializado</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Chatbot />

      {showDemo && (
        <>
        <div className="fixed   border-2 flex justify-center items-center  rounded-xl mx-auto inset-0 bg-black/50 z-50">
          <div className="container mx-auto h-[80%] w-[80%] px-4 bg-white rounded-xl border-2 border-primary">
          <video src="/videos/demo.mp4" className="w-full h-full object-cover" />
          </div>
        </div>

        </>
      )}

      <VideoModal
        isOpen={showDemo}
        onClose={() => setShowDemo(false)}
        videoUrl="/videos/demo.mp4"
      />

      {showRequestForm && (
        <RequestAccessForm onClose={() => setShowRequestForm(false)} />
      )}

      <footer className="bg-emerald-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">STEP.MEI</h4>
              <p className="text-emerald-200">
                Revolucionando a abertura de MEI com gamificação e tecnologia.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                    Portal do Cliente
                  </a>
                </li>
                <li>
                  <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                    Painel Administrativo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                    Gamificação
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                    LGPD
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Seção de redes sociais */}
          <div className="border-t border-emerald-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-emerald-200 text-sm">
                &copy; 2024 STEP.MEI. Todos os direitos reservados.
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

