import {
  Smartphone,
  BatteryCharging,
  Usb,
  CircuitBoard,
  RefreshCw,
  LifeBuoy,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Smartphone,
    title: 'Troca de tela',
    description: 'Substituição de telas quebradas ou com defeito, com peças de qualidade e garantia.',
  },
  {
    icon: BatteryCharging,
    title: 'Troca de bateria',
    description: 'Seu aparelho descarregando rápido? Trocamos a bateria e devolvemos a autonomia original.',
  },
  {
    icon: Usb,
    title: 'Troca de conector',
    description: 'Reparo do conector de carga para aparelhos que não carregam ou têm mau contato.',
  },
  {
    icon: CircuitBoard,
    title: 'Reparo em placa',
    description: 'Diagnóstico e manutenção em placa lógica para os mais diversos defeitos técnicos.',
  },
  {
    icon: RefreshCw,
    title: 'Atualização de software',
    description: 'Atualizamos e otimizamos o sistema do seu aparelho para melhor desempenho.',
  },
  {
    icon: LifeBuoy,
    title: 'Recuperação de aparelhos',
    description: 'Aparelho não liga ou molhou? Fazemos o diagnóstico e recuperação sempre que possível.',
  },
];
