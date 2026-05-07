import Link from 'next/link';
import { ILatestNewsItemProps, LatestNewsItem } from '../latest-news-item/LatestNewsItem';
import { Text } from '../text/Text';
import ArrowRight from '../../assets/icons/ArrowRight.svg';
import styles from './LatesNews.module.scss';
import Image from 'next/image';

export interface ILatesNewsProps {
  articles: ILatestNewsItemProps[];
}

export const LatesNews = ({ articles }: ILatesNewsProps) => {
  return (
    <div className={styles['lates-news-wrapper']}>
      <div className={styles['lates-news-header']}>
        <div className={styles['live-dot']}></div>
        <Text className={styles.title} component={'h3'} size="h3" color="secondary">
          Latest News
        </Text>
      </div>
      <div className={styles['lates-news-list']}>
        {articles.map((article) => (
          <LatestNewsItem
            key={article.href}
            title={article.title}
            time={article.time}
            href={article.href}
          />
        ))}
      </div>
      <div className={styles['lates-news-more']}>
        <Link href={'/more'}>See all news</Link>
        <Image loading="eager" alt="Arrow right" src={ArrowRight} />
      </div>
    </div>
  );
};
