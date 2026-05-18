'use client';
import { useState } from 'react';
import { ArticleList } from '../article-list/ArticleList';
import { LatesNews } from '../latest-news/LatestNews';
import { IArticleCardProps } from '../article-card/ArticleCard.types';
import { ILatestNewsItemProps } from '../latest-news/LatestNewsItem';
import { Button } from '../button/Button';
import clsx from 'clsx';
import styles from './NewsToggle.module.scss';

type Props = {
  featuredArticles: IArticleCardProps[];
  latestArticles: ILatestNewsItemProps[];
};

export default function NewsToggle({ featuredArticles, latestArticles }: Props) {
  const [activeTab, setActiveTab] = useState<'featured' | 'latest'>('featured');

  return (
    <>
      <div className={styles['news-toggle-wrapper']}>
        <Button
          version="switch"
          onClick={() => setActiveTab('featured')}
          className={clsx(styles.button, {
            [styles.active]: activeTab === 'featured',
          })}
        >
          Featured
        </Button>

        <Button
          version="switch"
          onClick={() => setActiveTab('latest')}
          className={clsx(styles.button, {
            [styles.active]: activeTab === 'latest',
          })}
        >
          Latest
        </Button>
      </div>

      <div
        className={clsx(styles.tab, {
          [styles.hidden]: activeTab !== 'featured',
        })}
      >
        <ArticleList columnCount="two" articles={featuredArticles} />
      </div>

      <div
        className={clsx(styles.tab, {
          [styles.hidden]: activeTab !== 'latest',
        })}
      >
        <LatesNews articles={latestArticles} />
      </div>
    </>
  );
}
