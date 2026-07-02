import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';
import { differentials } from '@/data/differentials';
import { getYearsInBusiness } from '@/utils/whatsapp';

export default function Differentials() {
  const yearsInBusiness = getYearsInBusiness();

  return (
    <section id="diferenciais" className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />

      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher a Video Tech"
          description={`Há ${yearsInBusiness} anos cuidando dos aparelhos da nossa vizinhança com transparência e agilidade.`}
          light
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {differentials.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/40 hover:bg-white/[0.06]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-400">
                  <item.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-300">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
