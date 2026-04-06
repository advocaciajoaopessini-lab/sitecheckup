import { Check, Shield } from 'lucide-react';

const benefits = [
  'Se existem dívidas internas no Banco Central que você desconhece',
  'Se há restrições no SPC, Serasa ou Boa Vista',
  'Se seu CPF está marcado como prejuízo em alguma instituição',
  'Qual é sua classificação atual de rating bancário',
  'Qual o risco de crédito que o sistema enxerga sobre você',
  'Qual limite de crédito você teria possibilidade de aprovação',
];

export function SolutionSection() {
  return (
    <section className="relative bg-navy py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium">A solução</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Check-up do CPF — <span className="text-gold">Diagnóstico Completo</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Uma análise detalhada que mostra, de forma clara e objetiva, tudo o que está travando o seu crédito.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-navy-light rounded-2xl p-8 border border-gold/20 mb-8">
          <h3 className="text-xl font-semibold text-gold mb-6">
            O que você vai descobrir:
          </h3>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <div className="p-6 bg-navy-lighter/50 rounded-xl border border-gold/10">
          <p className="text-gold font-semibold mb-2">Importante:</p>
          <p className="text-gray-300">
            Isso não é promessa de aprovação. É <span className="text-white font-medium">diagnóstico, clareza e estratégia.</span> Você vai saber exatamente onde está o problema e o que precisa ser feito.
          </p>
        </div>
      </div>
    </section>
  );
}
