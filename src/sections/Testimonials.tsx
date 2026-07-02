import { Star, Quote } from 'lucide-react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Card from '@/components/Card';
import FadeIn from '@/components/FadeIn';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-20 lg:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que nossos clientes dizem"
          description="Avaliações reais de clientes, direto do nosso perfil no Google Maps."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.08}>
              <Card className="flex h-full flex-col gap-4">
                <Quote className="h-7 w-7 text-brand-300" />
                <p className="grow text-sm leading-relaxed text-ink-600">“{testimonial.quote}”</p>
                <div className="flex text-brand-500">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-3 border-t border-ink-100 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-xs font-bold text-brand-700">
                    {testimonial.initials}
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-ink-900">{testimonial.name}</p>
                    <p className="text-xs text-ink-500">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
