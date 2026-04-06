import { ClipboardCheck, MessageCircle, Lightbulb } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: ClipboardCheck,
    title: 'Faça o check-up',
    description: 'Adquira a análise e informe seu CPF',
  },
  {
    number: '2',
    icon: MessageCircle,
    title: 'Receba no WhatsApp',
    description: 'Em minutos, um especialista entra em contato com sua análise completa',
  },
  {
    number: '3',
    icon: Lightbulb,
    title: 'Saiba o que fazer',
    description: 'Entenda exatamente o que está travando e qual o caminho para destravar',
  },
];

export function StepsSection() {
  return (
    <section className="relative bg-navy-light py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simples e rápido
          </h2>
          <p className="text-xl text-gold">
            Como funciona
          </p>
          <p className="text-gray-400 mt-4">
            Em 3 passos você descobre o que está travando o seu crédito.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-6 bg-navy rounded-xl border border-gold/10 hover:border-gold/30 transition-colors"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold text-navy font-bold flex items-center justify-center">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4 mt-4">
                <step.icon className="w-8 h-8 text-gold" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-navy font-bold rounded-full transition-all duration-300 shadow-gold hover:shadow-lg"
          >
            Fazer meu check-up agora
          </a>
        </div>
      </div>
    </section>
  );
}
