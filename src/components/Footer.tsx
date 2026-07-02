import { Clock, MapPin, Phone } from 'lucide-react';
import Container from './Container';
import Logo from './Logo';
import WhatsAppIcon from './icons/WhatsAppIcon';
import InstagramIcon from './icons/InstagramIcon';
import { buildWhatsappLink, MAPS_URL, STORE_INFO, WHATSAPP_MESSAGES } from '@/utils/whatsapp';

const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 pt-16 pb-8 text-ink-300">
      <Container className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Logo dark />
          <p className="max-w-xs text-sm leading-relaxed text-ink-400">
            Assistência técnica especializada em celulares e eletrônicos, com peças de qualidade
            e garantia em todos os serviços.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={STORE_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Video Tech"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-ink-300 transition-colors hover:bg-brand-500 hover:text-white"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={buildWhatsappLink(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Video Tech"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-ink-300 transition-colors hover:bg-brand-500 hover:text-white"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-white">Navegação</h3>
          <ul className="flex flex-col gap-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-brand-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-white">Contato</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <a href={`tel:+55${STORE_INFO.phone.replace(/\D/g, '')}`} className="hover:text-brand-400">
                {STORE_INFO.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <a
                href={buildWhatsappLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-400"
              >
                {STORE_INFO.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-400"
              >
                {STORE_INFO.address}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-white">Horário de funcionamento</h3>
          <ul className="flex flex-col gap-3 text-sm">
            {STORE_INFO.hours.map((item) => (
              <li key={item.days} className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>
                  {item.days}: <span className="text-white">{item.time}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="mt-12 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-center text-xs text-ink-500 sm:flex-row sm:justify-between sm:text-left">
        <p>© {new Date().getFullYear()} Video Tech. Todos os direitos reservados.</p>
        <p>Eletrônicos · Celulares · Informática</p>
      </Container>
    </footer>
  );
}
