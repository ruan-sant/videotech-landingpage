import { MessageCircle, ClipboardCheck, PackageCheck, type LucideIcon } from 'lucide-react';

export interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Entre em contato',
    description: 'Chame a gente pelo WhatsApp ou venha até a loja e conte o que aconteceu com seu aparelho.',
  },
  {
    icon: ClipboardCheck,
    number: '02',
    title: 'Faça o orçamento',
    description: 'Avaliamos o problema e te passamos um orçamento sem compromisso, com prazo estimado.',
  },
  {
    icon: PackageCheck,
    number: '03',
    title: 'Retire o aparelho consertado',
    description: 'Aprovado o orçamento, realizamos o reparo e avisamos assim que estiver pronto para retirada.',
  },
];
