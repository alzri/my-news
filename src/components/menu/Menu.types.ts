import { ComponentType, SVGProps } from 'react';

export interface IMenuProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
}
