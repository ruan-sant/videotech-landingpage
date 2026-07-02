export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
}

// Depoimentos fictícios para fins de demonstração de layout.
// TODO: substituir por depoimentos reais de clientes (com autorização) antes de publicar.
export const testimonials: Testimonial[] = [
  {
    name: 'Carla Mendes',
    role: 'Cliente desde 2022',
    quote:
      'Troquei a tela do meu celular em menos de uma hora e o preço foi bem justo. Atendimento super atencioso.',
    rating: 5,
    initials: 'CM',
  },
  {
    name: 'Rafael Souza',
    role: 'Cliente Video Tech',
    quote:
      'Meu notebook não ligava mais e eu já tinha desistido. Os técnicos conseguiram recuperar tudo e ainda me explicaram o problema.',
    rating: 5,
    initials: 'RS',
  },
  {
    name: 'Juliana Alves',
    role: 'Cliente Video Tech',
    quote:
      'Comprei uma capinha e uma película e o atendimento foi muito rápido. Loja organizada e com bastante variedade.',
    rating: 5,
    initials: 'JA',
  },
  {
    name: 'Marcos Vinícius',
    role: 'Cliente desde 2021',
    quote:
      'Já troquei bateria de dois aparelhos aqui e sempre saio satisfeito. Recomendo de olhos fechados.',
    rating: 5,
    initials: 'MV',
  },
];
