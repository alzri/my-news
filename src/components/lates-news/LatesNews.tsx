'use client';

import { useEffect, useRef, useState } from 'react';
import { ILatestNewsItemProps, LatestNewsItem } from './LatestNewsItem';
import { Text } from '../text/Text';
import ArrowRight from '../../assets/icons/ArrowRight.svg';
import { Button } from '../button/Button';
import styles from './LatesNews.module.scss';

export interface ILatesNewsProps {
  articles: ILatestNewsItemProps[];
}

const ITEMS_PER_LOAD = 10;

export const LatesNews = ({ articles }: ILatesNewsProps) => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];

        if (target.isIntersecting && visibleCount < articles.length) {
          setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '200px',
      }
    );

    const el = loaderRef.current;

    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [articles.length, visibleCount]);

  const visibleArticles = articles.slice(0, visibleCount);

  return (
    <div className={styles['lates-news-wrapper']}>
      <div className={styles['lates-news-header']}>
        <div className={styles['live-dot']} />

        <Text className={styles.title} component="h3" size="h3" color="secondary">
          Latest News
        </Text>
      </div>

      <div className={styles['lates-news-list']}>
        {visibleArticles.map((article) => (
          <LatestNewsItem
            key={article.url}
            title={article.title}
            publishedAt={article.publishedAt}
            url={article.url}
          />
        ))}
      </div>

      {visibleCount < articles.length && <div ref={loaderRef} style={{ height: 40 }} />}

      <div className={styles['lates-news-more']}>
        <Button href="/more" component="a" version="link">
          See all news
        </Button>

        <ArrowRight />
      </div>
    </div>
  );
};
