export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
}

// Depoimentos reais de clientes, extraídos do perfil da loja no Google Maps.
export const testimonials: Testimonial[] = [
  {
    name: 'Tatiane Farias',
    role: 'Cliente Video Tech',
    quote:
      'Atendimento espetacular, hoje precisei de um serviço em meu celular e fui muito bem atendida e meu problema resolvido rapidamente.',
    rating: 5,
    initials: 'TF',
  },
  {
    name: 'Kristofer Padilha',
    role: 'Cliente Video Tech',
    quote:
      'Produtos de altíssima qualidade, excelente atendimento, com os melhores preços, muito obrigado!! Recomendo 100%. Ah e ainda presta assistência, muito top.',
    rating: 5,
    initials: 'KP',
  },
  {
    name: 'André Fidelis',
    role: 'Cliente Video Tech',
    quote:
      'Loja super boa, recomendo muito, funcionários super educados, atenciosos, precisava arrumar a tela do meu celular, foi consertado no mesmo dia, com um preço abaixo da média, super recomendo.',
    rating: 5,
    initials: 'AF',
  },
  {
    name: 'Paola Avelar',
    role: 'Cliente Video Tech',
    quote:
      'Já fui várias vezes na loja, e tudo o que eu preciso ali no Maracanã eu acho nessa loja, não preciso ir no centro de Curitiba pra comprar. Já fiz conserto do meu celular também e foi rápido o serviço e ficou bem bom.',
    rating: 5,
    initials: 'PA',
  },
  {
    name: 'Ana Caroline Toledo',
    role: 'Cliente Video Tech',
    quote: 'Atendimento incrível, ótimos produtos. O melhor da região.',
    rating: 5,
    initials: 'AT',
  },
  {
    name: 'Maria Telma',
    role: 'Cliente Video Tech',
    quote:
      'Atendimento profissional, trabalham com vendas de acessórios para celular e dispositivos eletrônicos. Contam também com assistência técnica para celulares, com preço acessível.',
    rating: 5,
    initials: 'MT',
  },
];
