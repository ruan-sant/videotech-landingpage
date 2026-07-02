// TODO: substituir pelo número real da loja no formato internacional (DDI+DDD+número, apenas dígitos)
export const WHATSAPP_NUMBER = '5541930553050';

export const MAPS_URL = 'https://maps.app.goo.gl/yaGu7fE3nK1TMgvD9';

export const STORE_INFO = {
  name: 'Video Tech',
  phone: '(41) 3055-3050',
  whatsappDisplay: '(41) 93055-3050',
  address: 'Rua Pasteur, 13 — Calçadão Terminal do Maracanã, Alto Maracanã, Colombo - PR, 83408-020',
  hours: [
    { days: 'Segunda a Sexta', time: '09h às 19h' },
    { days: 'Sábado', time: '09h às 13h' },
  ],
  social: {
    instagram: 'https://instagram.com/videotech',
  },
};

export function buildWhatsappLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  budget: 'Olá! Vim pelo site e gostaria de fazer um orçamento.',
  general: 'Olá! Gostaria de mais informações sobre os serviços da Video Tech.',
};
