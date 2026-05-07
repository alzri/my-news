import Link from 'next/link';
import { Text } from '../text/Text';
import styles from './LatestNewsItem.module.scss';

export interface ILatestNewsItemProps {
  title: string;
  time: string;
  href: string;
}

export const LatestNewsItem = ({ title, time, href }: ILatestNewsItemProps) => {
  return (
    <div>
      <Link className={styles['lates-news-item-wrapper']} href={href}>
        <Text className={styles.time} component={'span'} size="paragraph-xs" color="accent-primary">
          {time}
        </Text>
        <Text className={styles.title} component={'h3'} size="h3" color="secondary">
          {title}
        </Text>
      </Link>
      <div className={styles.divider}></div>
    </div>
  );
};
