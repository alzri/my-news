import { MenuItem } from './MenuItem';
import { usePathname } from 'next/navigation';
import { menuItems } from '../../utils/menu.utils';

interface IMenuProps {
  onClick?: () => void;
}

export const Menu = ({ onClick }: IMenuProps) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <>
      {menuItems.map((item) => (
        <MenuItem
          key={item.href}
          icon={item.icon}
          title={item.title}
          href={item.href}
          isActive={isActive(item.href)}
          onClick={onClick}
        />
      ))}
    </>
  );
};
