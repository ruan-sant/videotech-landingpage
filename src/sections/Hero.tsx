import { motion } from 'framer-motion';
import { ArrowRight, MapPin, ShieldCheck, Star, Wrench } from 'lucide-react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { buildWhatsappLink, MAPS_URL, WHATSAPP_MESSAGES } from '@/utils/whatsapp';
import storefront from '@/assets/storefront.jpg';

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Blobs decorativos */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-100/70 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-brand-50 blur-3xl" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-700 uppercase">
            <Wrench className="h-3.5 w-3.5" />
            Assistência técnica especializada
          </span>

          <h1 className="text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-ink-900 sm:text-5xl lg:text-6xl">
            Seu celular com defeito?
            <br />
            A gente <span className="text-brand-500">resolve rápido</span>.
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-ink-500">
            Conserto de celulares e eletrônicos com técnicos especializados, peças de qualidade
            e garantia. Também temos os melhores acessórios para o seu dia a dia.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              href={buildWhatsappLink(WHATSAPP_MESSAGES.budget)}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              icon={<WhatsAppIcon className="h-5 w-5" />}
            >
              Fazer orçamento pelo WhatsApp
            </Button>
            <Button href="#servicos" variant="secondary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Ver serviços
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-ink-600">Avaliação 5.0</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-ink-600">
              <ShieldCheck className="h-4.5 w-4.5 text-brand-500" />
              Garantia em todos os serviços
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver a localização da Video Tech no Google Maps"
            className="group relative block overflow-hidden rounded-[2rem] border border-ink-100 shadow-soft-lg"
          >
            {/* Substituir por foto oficial em alta resolução da fachada/loja */}
            <img
              src={storefront}
              alt="Fachada da loja Video Tech — Eletrônicos, Celulares e Informática"
              className="aspect-4/5 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 sm:aspect-3/4"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-ink-950/0 pb-6 opacity-0 transition-all duration-300 group-hover:bg-ink-950/30 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 shadow-soft-lg">
                <MapPin className="h-4 w-4 text-brand-500" />
                Ver no Google Maps
              </span>
            </div>
          </a>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-ink-100 bg-white p-4 shadow-soft-lg sm:-left-10"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
              <ShieldCheck className="h-5.5 w-5.5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-ink-900">Garantia real</p>
              <p className="text-xs text-ink-500">em peças e serviços</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="absolute -top-5 -right-4 rounded-2xl border border-ink-100 bg-white px-4 py-3 shadow-soft-lg sm:-right-8"
          >
            <p className="text-xs font-semibold text-ink-500">Aberto agora</p>
            <p className="flex items-center gap-1.5 text-sm font-bold text-brand-600">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              Loja física
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
