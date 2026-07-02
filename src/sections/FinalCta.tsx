import Container from '@/components/Container';
import FadeIn from '@/components/FadeIn';
import Button from '@/components/Button';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { Phone } from 'lucide-react';
import { buildWhatsappLink, STORE_INFO, WHATSAPP_MESSAGES } from '@/utils/whatsapp';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-500 py-20 lg:py-24">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-ink-950/10 blur-3xl" />

      <Container className="relative flex flex-col items-center gap-8 text-center">
        <FadeIn className="flex flex-col items-center gap-4">
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
            Seu aparelho merece um reparo de confiança
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-brand-50 sm:text-lg">
            Fale agora com a nossa equipe e receba um orçamento rápido, sem compromisso.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-col gap-3 sm:flex-row">
          <Button
            href={buildWhatsappLink(WHATSAPP_MESSAGES.budget)}
            target="_blank"
            rel="noopener noreferrer"
            variant="dark"
            size="lg"
            icon={<WhatsAppIcon className="h-5 w-5" />}
          >
            Chamar no WhatsApp agora
          </Button>
          <Button
            href={`tel:+55${STORE_INFO.phone.replace(/\D/g, '')}`}
            variant="ghost"
            size="lg"
            icon={<Phone className="h-4 w-4" />}
          >
            {STORE_INFO.phone}
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
