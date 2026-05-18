import { MenuItem } from './MenuItem';
import { usePathname } from 'next/navigation';
import { menuItems } from '../../utils/menu.utils';
import styles from './Menu.module.scss';

interface IMenuProps {
  onClick?: () => void;
}

export const Menu = ({ onClick }: IMenuProps) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className={styles.menu}>
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
    </div>
  );
};
