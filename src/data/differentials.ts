import { Zap, Award, Gem, ShieldCheck, HandCoins, type LucideIcon } from 'lucide-react';

export interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const differentials: Differential[] = [
  {
    icon: Zap,
    title: 'Atendimento rápido',
    description: 'A maioria dos reparos é feita no mesmo dia, sem enrolação.',
  },
  {
    icon: Award,
    title: 'Técnicos especializados',
    description: 'Equipe experiente e treinada para lidar com os mais diversos aparelhos.',
  },
  {
    icon: Gem,
    title: 'Peças de qualidade',
    description: 'Trabalhamos com componentes selecionados para garantir durabilidade.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantia do serviço',
    description: 'Todo reparo realizado sai da loja com garantia.',
  },
  {
    icon: HandCoins,
    title: 'Orçamento sem compromisso',
    description: 'Avaliamos o seu aparelho e você só aprova se fizer sentido pra você.',
  },
];
