import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'O que é rating bancário?',
    answer: 'É uma pontuação interna que os bancos usam para decidir se vão ou não aprovar o seu crédito. Diferente do score do Serasa (que é público), o rating bancário usa dados que só aparecem nos sistemas internos das instituições financeiras. É por isso que muita gente tem nome limpo mas não consegue crédito.',
  },
  {
    question: 'Meu nome está limpo. Ainda preciso do check-up?',
    answer: 'Sim — e é exatamente para pessoas nessa situação que o check-up existe. Nome limpo no Serasa não significa que seu CPF está aprovando crédito. Existem dezenas de outros fatores que os bancos analisam internamente e que podem estar travando você.',
  },
  {
    question: 'Como recebo o resultado?',
    answer: 'Após o pagamento, um especialista entra em contato via WhatsApp em poucos minutos. Ele faz a consulta na hora, analisa os dados e te envia o diagnóstico completo — com áudio, texto e imagens explicando cada ponto.',
  },
  {
    question: 'Isso vai resolver meu problema de crédito?',
    answer: 'O check-up mostra exatamente o que está travando o seu crédito. Com essa informação, você sabe o que precisa ser feito para corrigir. É como um exame médico: primeiro você descobre o que tem, depois trata. Sem diagnóstico, qualquer tentativa é no escuro.',
  },
];

export function FAQSection() {
  return (
    <section className="relative bg-navy py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <HelpCircle className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium">Dúvidas frequentes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Perguntas comuns
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-navy-light rounded-xl border border-gold/10 px-6 data-[state=open]:border-gold/30"
            >
              <AccordionTrigger className="text-left text-white hover:text-gold py-4 [&[data-state=open]]:text-gold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
