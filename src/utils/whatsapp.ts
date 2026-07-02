// TODO: substituir pelo número real da loja no formato internacional (DDI+DDD+número, apenas dígitos)
export const WHATSAPP_NUMBER = '5541930553050';

export const STORE_INFO = {
  name: 'Video Tech',
  phone: '(41) 3055-3050',
  whatsappDisplay: '(41) 93055-3050',
  // TODO: substituir pelo endereço real da loja
  address: 'Rua Exemplo, 123 — Bairro, Curitiba - PR',
  hours: [
    { days: 'Segunda a Sexta', time: '09h às 19h' },
    { days: 'Sábado', time: '09h às 13h' },
  ],
  social: {
    instagram: 'https://instagram.com/videotech',
    facebook: 'https://facebook.com/videotech',
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
