import { ArrowRight } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="relative bg-navy-light py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* CTA */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pare de tentar crédito no escuro.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Descubra o que está travando o seu CPF e saiba exatamente o que fazer.
          </p>
          <a
            href="https://pay.kiwify.com.br/y4ejKCp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-navy font-bold rounded-full transition-all duration-300 shadow-gold hover:shadow-lg"
          >
            Fazer meu check-up — R$ 67
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gold/20 mb-8" />

        {/* Company Info */}
        <div className="text-center">
          <p className="text-gold font-semibold mb-2">
            JFP Soluções Financeiras
          </p>
          <p className="text-gray-500 text-sm mb-4">
            CNPJ - 42.977.599/0001-68
          </p>
          <p className="text-gray-500 text-xs max-w-xl mx-auto">
            Este serviço é um diagnóstico financeiro. Não constitui promessa de aprovação de crédito. Resultados dependem da situação individual de cada CPF.
          </p>
        </div>
      </div>
    </footer>
  );
}
