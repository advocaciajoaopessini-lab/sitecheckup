import { useState, useRef } from 'react';
import { Lock, Volume2, VolumeX, CheckCircle } from 'lucide-react';

export function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen bg-navy flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-lighter/80 border border-gold/30 mb-8">
          <Lock className="w-4 h-4 text-gold" />
          <span className="text-sm text-gold-light font-medium tracking-wide uppercase">
            Análise confidencial do seu CPF
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Seu nome está limpo,
          <br />
          mas o crédito é{' '}
          <span className="text-gold">negado?</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Existe um motivo que aparece nos sistemas bancários — e você não tem acesso a ele. Até agora.
        </p>

        {/* Video Container */}
        <div className="relative max-w-md mx-auto mb-10">
          {/* Phone frame */}
          <div className="relative bg-black rounded-[3rem] p-3 border-4 border-gold/50 shadow-gold">
            <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-black">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/video-poster.jpg"
              >
                <source src="/video.mp4" type="video/mp4" />
              </video>
              
              {/* Mute toggle button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-black/90 transition-colors"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span>Toque para ativar o som</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4" />
                    <span>Som ativado</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#pricing"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gold hover:bg-gold-light text-navy font-bold text-lg rounded-full transition-all duration-300 shadow-gold hover:shadow-lg hover:scale-105"
        >
          <CheckCircle className="w-5 h-5" />
          Quero meu diagnóstico agora
        </a>
      </div>
    </section>
  );
}
