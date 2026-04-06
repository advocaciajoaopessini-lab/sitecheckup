import { X } from 'lucide-react';

const problems = [
  {
    title: 'Crédito negado sem explicação.',
    description: 'Você tem renda, paga as contas em dia, mas o banco simplesmente diz "perfil não aprovado".',
  },
  {
    title: 'Financiamento sempre recusado.',
    description: 'Tentou financiar um carro, imóvel ou equipamento e o CPF não passa — mesmo com nome limpo.',
  },
  {
    title: 'Limite que nunca aumenta.',
    description: 'Seu cartão tem limite de R$ 500 há anos. Você pede aumento e nada muda.',
  },
  {
    title: 'Empréstimo pessoal rejeitado.',
    description: 'Precisa de crédito para uma oportunidade e o banco nega. Você não sabe o motivo real.',
  },
  {
    title: 'Consultor disse que "está tudo certo".',
    description: 'Mas se está tudo certo, por que o crédito continua sendo negado?',
  },
];

export function ProblemSection() {
  return (
    <section className="relative bg-navy py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Você se identifica?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Se isso está acontecendo com você,
            <br />
            <span className="text-gold font-semibold">o problema não é o seu nome.</span>
          </p>
          <p className="text-gray-400 mt-4">
            O problema está no que os bancos enxergam sobre o seu CPF — e que você nunca viu.
          </p>
        </div>

        {/* Problems List */}
        <div className="space-y-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-navy-light rounded-xl border border-gold/10 hover:border-gold/30 transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-400">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-navy font-bold rounded-full transition-all duration-300 shadow-gold hover:shadow-lg"
          >
            Descobrir o motivo real
          </a>
        </div>
      </div>
    </section>
  );
}
