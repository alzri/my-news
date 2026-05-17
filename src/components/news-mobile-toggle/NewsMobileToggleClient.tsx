'use client';

import { useState } from 'react';
import { ArticleList } from '../article-list/ArticleList';
import { LatesNews } from '../lates-news/LatesNews';
import { Button } from '../button/Button';
import type { IArticleCardProps } from '../article-card/ArticleCard.types';
import styles from './NewsMobileToggle.module.scss';
import type { ILatestNewsItemProps } from '../lates-news/LatestNewsItem.tsx';

type Props = {
  articles: IArticleCardProps[];
  latestNews: ILatestNewsItemProps[];
};

export const NewsMobileToggleClient = ({ articles, latestNews }: Props) => {
  const [view, setView] = useState<'articles' | 'latest'>('articles');

  return (
    <div className={styles['news-mobile-toggle-wrapper']}>
      <div>
        <Button version="switch" isActive={view === 'articles'} onClick={() => setView('articles')}>
          Featured
        </Button>

        <Button version="switch" isActive={view === 'latest'} onClick={() => setView('latest')}>
          Latest
        </Button>
      </div>

      {view === 'articles' && <ArticleList columnCount="three" articles={articles} />}

      {view === 'latest' && <LatesNews articles={latestNews} />}
    </div>
  );
};
