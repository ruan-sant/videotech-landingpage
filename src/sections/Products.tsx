import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import FadeIn from '@/components/FadeIn';
import Button from '@/components/Button';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { products } from '@/data/products';
import { buildWhatsappLink, WHATSAPP_MESSAGES } from '@/utils/whatsapp';

export default function Products() {
  return (
    <section id="produtos" className="bg-white py-20 lg:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Produtos"
          title="Acessórios para celular e informática"
          description="Capinhas, películas, fones, carregadores e muito mais — tudo em um só lugar, com qualidade garantida."
        />

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <FadeIn key={product.title} delay={index * 0.05}>
              <div className="group flex h-full flex-col items-center gap-4 rounded-3xl border border-ink-100 bg-white px-6 py-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-soft-lg">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-50 text-ink-700 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  <product.icon className="h-6 w-6" />
                </span>
                <h3 className="text-sm font-semibold text-ink-900">{product.title}</h3>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-ink-500">
            Também trabalhamos com headsets, controles e diversos outros acessórios. Consulte
            disponibilidade.
          </p>
          <Button
            href={buildWhatsappLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon={<WhatsAppIcon className="h-4 w-4" />}
          >
            Perguntar disponibilidade
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
