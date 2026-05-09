import { IBreakingNewsProps } from './BreakingNews.types';
import { Text } from '../text/Text';
import styles from './BreakingNews.module.scss';
import Link from 'next/link';

export const BreakingNews = ({ title, author, href }: IBreakingNewsProps) => {
  return (
    <Link className={styles['breaking-news-wrapper']} href={href}>
      <div className={styles['breaking-news-tag']}>
        <Text className={styles['tag-name']} component="p" size="paragraph-xs" color="tertiary">
          Breaking
        </Text>
      </div>
      <div className={styles['breaking-news-content']}>
        <Text className={styles.title} component="h1" size="h1" color="tertiary">
          {title}
        </Text>
        <Text className={styles.author} component="p" size="paragraph-xs" color="accent-tertiary">
          {author}
        </Text>
      </div>
    </Link>
  );
};
