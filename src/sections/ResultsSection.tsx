import { Users, Clock, TrendingUp, Quote } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '2.000+',
    label: 'CPFs analisados',
  },
  {
    icon: Clock,
    value: '+30min',
    label: 'Tempo médio de entrega',
  },
  {
    icon: TrendingUp,
    value: '98%',
    label: 'Descobrem o motivo real',
  },
];

export function ResultsSection() {
  return (
    <section className="relative bg-navy py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados reais
          </h2>
          <p className="text-xl text-gold">
            Milhares de CPFs já foram analisados.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-navy-light rounded-xl border border-gold/10"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <span className="text-3xl md:text-4xl font-bold text-gold mb-2">
                {stat.value}
              </span>
              <span className="text-gray-400 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="relative p-8 bg-gradient-to-r from-gold/10 to-navy-light rounded-2xl border border-gold/20">
          <Quote className="absolute top-4 left-4 w-8 h-8 text-gold/30" />
          <blockquote className="text-lg text-gray-300 italic mb-6 pl-8">
            "Eu achava que estava tudo certo. Quando vi o raio-x do meu CPF, entendi por que o banco negava tudo. Tinha coisas ali que eu nem sabia que existiam."
          </blockquote>
          <div className="flex items-center gap-4 pl-8">
            <img
              src="/annuara.jpeg"
              alt="Íris Souza"
              className="w-12 h-12 rounded-full object-cover border-2 border-gold/50 flex-shrink-0"
            />
            <cite className="text-gold font-medium not-italic">
              — Íris Souza, após receber seu Check-up Financeiro
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
