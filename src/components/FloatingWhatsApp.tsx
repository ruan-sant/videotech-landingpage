import { motion } from 'framer-motion';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { buildWhatsappLink, WHATSAPP_MESSAGES } from '@/utils/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={buildWhatsappLink(WHATSAPP_MESSAGES.budget)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1.2, ease: 'easeOut' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-brand sm:right-8 sm:bottom-8"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-40" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </motion.a>
  );
}
