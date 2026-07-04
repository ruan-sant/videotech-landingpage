export const WHATSAPP_NUMBER = '554130553050';

export const MAPS_URL = 'https://maps.app.goo.gl/yaGu7fE3nK1TMgvD9';

export const STORE_INFO = {
  name: 'Video Tech',
  phone: '(41) 3055-3050',
  whatsappDisplay: '(41) 3055-3050',
  address: 'Rua Pasteur, 13 — Calçadão Terminal do Maracanã, Alto Maracanã, Colombo - PR, 83408-020',
  hours: [
    { days: 'Segunda a Sexta', time: '09h às 19h' },
    { days: 'Sábado', time: '09h às 16h' },
  ],
  social: {
    instagram: 'https://www.instagram.com/videotechmaracana',
  },
};

const STORE_TIMEZONE = 'America/Sao_Paulo';

export function isStoreOpenNow(date: Date = new Date()): boolean {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: STORE_TIMEZONE,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(date);

  const weekday = parts.find((part) => part.type === 'weekday')?.value;
  const hour = Number(parts.find((part) => part.type === 'hour')?.value);
  const minute = Number(parts.find((part) => part.type === 'minute')?.value);
  const time = hour + minute / 60;

  if (weekday && ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(weekday)) {
    return time >= 9 && time < 19;
  }
  if (weekday === 'Sat') {
    return time >= 9 && time < 16;
  }
  return false;
}

export function buildWhatsappLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  budget: 'Olá! Vim pelo site e gostaria de fazer um orçamento.',
  general: 'Olá! Gostaria de mais informações sobre os serviços da Video Tech.',
};
