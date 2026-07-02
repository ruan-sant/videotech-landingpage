import {
  Smartphone as CaseIcon,
  ShieldCheck,
  Headphones,
  Plug,
  Cable,
  Mouse,
  Keyboard,
  Speaker,
  type LucideIcon,
} from 'lucide-react';

export interface Product {
  icon: LucideIcon;
  title: string;
}

export const products: Product[] = [
  { icon: CaseIcon, title: 'Capinhas' },
  { icon: ShieldCheck, title: 'Películas' },
  { icon: Headphones, title: 'Fones de ouvido' },
  { icon: Plug, title: 'Carregadores' },
  { icon: Cable, title: 'Cabos e fontes' },
  { icon: Mouse, title: 'Mouses' },
  { icon: Keyboard, title: 'Teclados' },
  { icon: Speaker, title: 'Caixas de som' },
];
