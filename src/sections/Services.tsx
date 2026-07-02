import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Card from '@/components/Card';
import FadeIn from '@/components/FadeIn';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="servicos" className="bg-ink-50/40 py-20 lg:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Serviços"
          title="Manutenção completa para o seu aparelho"
          description="Da tela quebrada ao aparelho que não liga mais: cuidamos de cada detalhe com técnicos especializados."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.08}>
              <Card className="flex h-full flex-col gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600">
                  <service.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink-900">{service.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{service.description}</p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
