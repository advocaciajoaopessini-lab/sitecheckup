import { AlertTriangle } from 'lucide-react';

const bankInfo = [
  'Dívidas internas registradas no Banco Central',
  'Prejuízos lançados por instituições financeiras',
  'Risco de crédito do seu CPF (rating bancário)',
  'Classificação do seu score interno',
  'Capacidade real de pagamento mensal',
  'Limite de crédito que o sistema sugere para você',
  'Alertas internos de restrição (invisíveis para você)',
  'CCF (cheque sem fundo), protestos ativos',
];

export function InfoSection() {
  return (
    <section className="relative bg-navy-light py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <AlertTriangle className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium">O que você não sabe</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Os bancos <span className="text-gold">NÃO analisam</span>
            <br />
            somente SPC e Serasa.
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Eles usam sistemas internos que mostram informações que você nunca viu — e que determinam se o seu crédito vai ser aprovado ou não.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {bankInfo.map((info, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-navy rounded-lg border border-gold/10"
            >
              <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
              <span className="text-gray-300">{info}</span>
            </div>
          ))}
        </div>

        {/* Warning Box */}
        <div className="p-6 bg-gradient-to-r from-gold/10 to-transparent border-l-4 border-gold rounded-r-lg">
          <p className="text-lg text-white font-medium">
            Se você não vê isso, você não sabe o motivo real da negativa.
          </p>
          <p className="text-gold mt-2">
            E continua tentando crédito às cegas.
          </p>
        </div>
      </div>
    </section>
  );
}
