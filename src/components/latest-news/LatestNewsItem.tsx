import Link from 'next/link';
import { Text } from '../text/Text';
import styles from './LatestNews.module.scss';

export interface ILatestNewsItemProps {
  title: string;
  publishedAt: string;
  url: string;
}

export const LatestNewsItem = ({ title, publishedAt, url }: ILatestNewsItemProps) => {
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) return '';

    return date.toLocaleTimeString('hr-HR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div>
      <Link className={styles['lates-news-item-wrapper']} href={url}>
        <Text className={styles.time} component={'span'} size="paragraph-xs" color="accent-primary">
          {formatTime(publishedAt)}
        </Text>
        <Text className={styles.title} component={'h3'} size="h3" color="secondary">
          {title}
        </Text>
      </Link>
      <div className={styles.divider}></div>
    </div>
  );
};
