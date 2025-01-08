'use client'

import Logo from '@/components/Logo'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { ArrowRight, Building2, CheckCircle, Menu, Users } from 'lucide-react'
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
  digital: '/figuras/cemporcentodigital.svg'
}

// Adicione estas constantes para os recursos
const FEATURES = [
  {
    icon: Users,
    title: "Portal do Cliente",
    description: "Experiência gamificada que guia o cliente em cada etapa",
    color: "emerald"
  },
  {
    icon: Building2,
    title: "Painel Administrativo",
    description: "Controle total do processo para sua equipe",
    color: "green"
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
                <div className="space-y-4 mt-8">
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
                        O MEIPro automatiza todo o processo de abertura, permitindo que seu escritório:
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
                    </div>

                    <div className="pt-4">
                      <p className="text-lg text-emerald-700 font-medium mb-6">
                        Mais de 500 escritórios já transformaram seus processos com o MEIPro
                      </p>
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

                {/* Cards de Recursos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {FEATURES.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="group hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <div className={`w-12 h-12 rounded-lg bg-${feature.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Área de Imagem com Animação */}
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
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-2xl"></div>
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

                  {/* Indicadores de slide modernizados */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`transition-all duration-300 ${
                          currentImage === index 
                            ? 'w-8 h-2 bg-blue-600' 
                            : 'w-2 h-2 bg-blue-300 hover:bg-blue-400'
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
                Nosso Diferencial
              </span>
              <h2 className="text-4xl font-bold text-emerald-900 mb-4">
                Transforme a Burocracia em Diversão
              </h2>
              <p className="text-xl text-emerald-600 max-w-3xl mx-auto">
                Enquanto outras plataformas mantêm o processo tradicional, o MEIPro revoluciona 
                a experiência do seu cliente através da gamificação, tornando cada etapa da 
                abertura do MEI em uma jornada envolvente e recompensadora
              </p>
            </motion.div>

            {/* Adicione uma ilustração ou ícone representativo */}
            <div className="flex justify-center mb-16">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 to-transparent rounded-full blur-3xl"></div>
                <div className="bg-white p-8 rounded-full shadow-xl">
                  <div className="text-6xl">🎮➡️📊</div>
                </div>
              </div>
            </div>

            {/* Cards de benefícios existentes com as novas informações */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BENEFITS.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 h-full transform hover:-translate-y-1">
                    {/* Ícone com efeito de hover */}
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-4xl">
                        {benefit.icon}
                      </div>
                    </div>
                    
                    {/* Título e Descrição */}
                    <h3 className="text-xl font-bold text-emerald-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {benefit.description}
                    </p>

                    {/* Lista de Features */}
                    <ul className="space-y-3">
                      {benefit.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-gray-700">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-emerald-600" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Botão "Saiba mais" com efeito hover */}
                    <div className="mt-6 pt-4 border-t border-emerald-100">
                      <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center gap-1 group">
                        Saiba mais
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Adicione uma seção de destaque */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-16 bg-emerald-50 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                Seus clientes vão amar abrir MEI
              </h3>
              <p className="text-lg text-emerald-700 mb-6">
                A gamificação não só torna o processo mais agradável, mas também aumenta 
                o engajamento e a satisfação dos seus clientes em até 80%
              </p>
              <div className="flex justify-center gap-8 flex-wrap">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-emerald-600">93%</div>
                  <div className="text-sm text-gray-600">Maior taxa de conclusão</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-emerald-600">75%</div>
                  <div className="text-sm text-gray-600">Menos dúvidas e suporte</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-emerald-600">2x</div>
                  <div className="text-sm text-gray-600">Mais recomendações</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Flutuante */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-16"
            >
              <div className="inline-block bg-gradient-to-r from-emerald-50 to-emerald-100/50 p-6 rounded-2xl shadow-lg">
                <p className="text-emerald-800 font-medium mb-4">
                  Pronto para oferecer uma experiência única aos seus clientes?
                </p>
                <Button 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Começar Agora
                  <ArrowRight className="ml-2 w-4 h-4" />
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
                Como o MEIPro Funciona
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

            {/* CTA dentro da seção */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-20"
            >
              <div className="inline-block p-8 bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-lg">
                <h4 className="text-2xl font-bold text-emerald-900 mb-4">
                  Pronto para revolucionar seu escritório contábil?
                </h4>
                <p className="text-gray-600 mb-6">
                  Comece agora mesmo a oferecer uma experiência diferenciada para seus clientes
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  Começar Gratuitamente
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-emerald-50/50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              {/* Badge de Gamificação */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-emerald-100 rounded-full"
                >
                  <span className="text-2xl">🎮</span>
                  <span className="text-emerald-700 font-medium">Processo Gamificado</span>
                  <span className="bg-white px-2 py-1 rounded-full text-xs font-bold text-emerald-600">ÚNICO</span>
                </motion.div>
              </div>

              <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-emerald-100/50">
                {/* Seção de Gamificação */}
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-8 text-white">
                  <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-4">
                      Transforme a Abertura de CNPJ em uma Experiência Envolvente
                    </h3>
                    <p className="text-emerald-100 mb-6">
                      Nossa plataforma única transforma o processo burocrático em uma jornada interativa e gamificada
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {[
                        { icon: "🎯", text: "Missões e Conquistas" },
                        { icon: "⭐", text: "Sistema de Recompensas" },
                        { icon: "📊", text: "Progresso Visual" }
                      ].map((item, index) => (
                        <div key={index} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                          <div className="text-2xl mb-2">{item.icon}</div>
                          <div className="text-sm font-medium">{item.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="text-center space-y-4 mb-12">
                    <span className="inline-block px-6 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium">
                      Escolha a Melhor Solução
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
                      Já possui um site para seu escritório contábil?
                    </h2>
                    <p className="text-lg text-emerald-600 max-w-2xl mx-auto">
                      Ambas as opções incluem nossa exclusiva plataforma gamificada
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Opção 1: Já tem site */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white rounded-[24px] shadow-lg transform transition-all duration-300 group-hover:scale-[1.02]"></div>
                      <div className="relative p-8 rounded-[24px] border-2 border-emerald-100 hover:border-emerald-200 transition-all bg-white/50 backdrop-blur-sm">
                        <div className="bg-emerald-50/50 rounded-xl p-4 mb-6">
                          <div className="flex items-center gap-2 text-emerald-700 font-medium mb-2">
                            <span className="text-xl">🎮</span>
                            Inclui Sistema Gamificado
                          </div>
                          <p className="text-sm text-emerald-600">
                            Integre nossa plataforma gamificada ao seu site atual
                          </p>
                        </div>
                        <div className="text-center mb-8">
                          <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                            <svg
                              className="w-10 h-10 text-emerald-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                              />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-emerald-900 mb-3">
                            Já tenho um site
                          </h3>
                          <p className="text-emerald-600 text-lg mb-8">
                            Integre o MEIPro ao seu site existente
                          </p>
                        </div>
                        <ul className="space-y-4 mb-8">
                          {[
                            'Integração via API REST',
                            'Mantenha seu site atual',
                            'Documentação completa'
                          ].map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-emerald-600" />
                              </div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => setShowRequestForm(true)}
                        >
                          Conhecer Integração
                        </Button>
                      </div>
                    </motion.div>

                    {/* Opção 2: Não tem site */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-[24px] shadow-lg transform transition-all duration-300 group-hover:scale-[1.02]"></div>
                      <div className="relative p-8 rounded-[24px] border-2 border-emerald-400/20 transition-all backdrop-blur-sm">
                        <div className="absolute top-4 right-4">
                          <span className="px-4 py-1 bg-white/20 rounded-full text-white text-sm">
                            Recomendado
                          </span>
                        </div>
                        <div className="text-center mb-8">
                          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                            <svg
                              className="w-10 h-10 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                              />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3">
                            Não tenho site ainda
                          </h3>
                          <p className="text-emerald-100 text-lg mb-8">
                            Solução completa: Site + Plataforma
                          </p>
                        </div>
                        <ul className="space-y-4 mb-8">
                          {[
                            'Site profissional personalizado',
                            'Painel administrativo completo',
                            'Hospedagem incluída',
                            'Suporte técnico especializado'
                          ].map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-white">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          className="w-full bg-white hover:bg-emerald-50 text-emerald-600 py-6 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => setShowRequestForm(true)}
                        >
                          Ver Plano Completo
                        </Button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Seção de Demonstração da Gamificação */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-12 text-center"
                  >
                    <Button
                      onClick={() => setShowDemo(true)}
                      className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300"
                    >
                      <span className="text-xl group-hover:animate-bounce">🎮</span>
                      Ver Como Funciona a Gamificação
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
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
              <h4 className="text-lg font-bold mb-4">MEIPro</h4>
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
                &copy; 2024 MEIPro. Todos os direitos reservados.
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

