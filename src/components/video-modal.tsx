"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import ReactPlayer from "react-player"
import { useState } from "react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
}

export function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  const [isReady, setIsReady] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[80vw] p-0 overflow-hidden rounded-xl border-0 shadow-2xl bg-gradient-to-br from-gray-900 to-black">
        {/* Header com título e botão de fechar */}
        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-50 flex justify-between items-center">
          <DialogTitle className="text-white font-medium text-lg">
            Demonstração do BuildHub
          </DialogTitle>
          <Button
            className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
            onClick={onClose}
            size="icon"
            variant="ghost"
            aria-label="Fechar modal"
          >
            <X className="h-4 w-4 text-white" />
          </Button>
        </div>

        {/* Container do vídeo com loading state */}
        <div className="relative aspect-video w-full max-w-[1400px] mx-auto bg-gradient-to-br from-blue-900/20 to-transparent">
          {!isReady && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
              <div className="flex flex-col items-center gap-4" role="status">
                <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
                <p className="text-blue-400 text-sm animate-pulse">Carregando vídeo...</p>
              </div>
            </div>
          )}
          
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls
            playing
            onReady={() => setIsReady(true)}
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload',
                  style: {
                    borderRadius: '0.75rem',
                  },
                  'aria-label': 'Vídeo de demonstração do BuildHub'
                }
              }
            }}
            style={{
              opacity: isReady ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}
            progressInterval={500}
            playbackRate={1.0}
            light={false}
            pip={true}
            className="rounded-xl overflow-hidden shadow-xl"
          />
        </div>

        {/* Rodapé com informações adicionais */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-40">
          <p className="text-white/70 text-sm">
            Pressione ESC para fechar ou use os controles do player para navegar
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
} 