import { IMenuProps } from './Menu.type';
import styles from './Menu.module.scss';
import { Text } from '../text/Text';
import Link from 'next/link';
import clsx from 'clsx';

export const MenuItem = ({ icon, title, href, isActive = false }: IMenuProps) => {
  const classNames = clsx(styles['menu-item-container'], isActive && styles.active);
  const Icon = icon;

  return (
    <Link className={classNames} href={href}>
      <Icon className={styles.icon} />
      <Text className={styles['item-name']} component="p" size="paragraph-xs" color="primary">
        {title}
      </Text>
    </Link>
  );
};
