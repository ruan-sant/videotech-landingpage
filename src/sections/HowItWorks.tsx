import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';
import { steps } from '@/data/steps';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-ink-50/40 py-20 lg:py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Como funciona"
          title="Conserto simples, em 3 passos"
          description="Sem burocracia: você entra em contato, aprova o orçamento e retira o aparelho pronto."
        />

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          <div className="absolute top-8 right-0 left-0 hidden h-px bg-linear-to-r from-transparent via-ink-200 to-transparent sm:block" />

          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.12} className="relative flex flex-col items-center gap-5 text-center">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-brand">
                <step.icon className="h-7 w-7" />
                <span className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full border-2 border-ink-50 bg-ink-900 text-[11px] font-bold text-white">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-ink-900">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-500">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
