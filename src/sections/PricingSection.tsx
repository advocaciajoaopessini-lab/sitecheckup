import { Check, Lock } from 'lucide-react';

const features = [
  'Análise completa do rating bancário',
  'Verificação de dívidas no Banco Central',
  'Consulta SPC, Serasa e Boa Vista',
  'Classificação de risco de crédito',
  'Limite de crédito estimado',
  'Entrega personalizada via WhatsApp',
  'Orientação sobre o que fazer em seguida',
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative bg-navy-light py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <span className="text-sm text-gold font-medium">Oferta especial</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Faça o check-up do seu CPF agora
          </h2>
          <p className="text-gray-400">
            Análise individual, personalizada, com dados reais do seu CPF. Entrega via WhatsApp em minutos.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto bg-navy rounded-2xl border-2 border-gold/30 overflow-hidden">
          {/* Header */}
          <div className="p-8 text-center border-b border-gold/10">
            <p className="text-gray-400 line-through mb-2">De R$ 169,00</p>
            <p className="text-sm text-gray-400 mb-4">apenas</p>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="font-bold text-gold" style={{fontSize: '5.625rem'}}>R$ 67,00</span>
            </div>
          </div>

          {/* Features */}
          <div className="p-8">
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-gold" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="https://pay.kiwify.com.br/y4ejKCp"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 bg-gold hover:bg-gold-light text-navy font-bold text-center rounded-full transition-all duration-300 shadow-gold hover:shadow-lg"
            >
              Quero meu diagnóstico — R$ 67
            </a>
          </div>
        </div>

        {/* Security Note */}
        <div className="flex items-center justify-center gap-3 mt-8 p-4 bg-navy rounded-lg border border-gold/10">
          <Lock className="w-5 h-5 text-gold" />
          <div className="text-center">
            <p className="text-white font-medium">Seus dados estão protegidos.</p>
            <p className="text-gray-400 text-sm">
              A análise é confidencial e feita diretamente nos sistemas oficiais. Nenhum dado é compartilhado com terceiros. Pagamento seguro via Greenn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
