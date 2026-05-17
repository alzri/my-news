'use client';
import { IArticleListProps } from './ArticleList.types';
import { ArticleCard } from '../article-card/ArticleCard';
import { BreakingNews } from '../breaking-news/BreakingNews';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useArticleLayout } from '../../hooks/useArticleLayout';
import clsx from 'clsx';
import styles from './ArticleList.module.scss';

export const ArticleList = ({
  articles,
  breakingNews,
  columnCount = 'three',
}: IArticleListProps) => {
  const isMobile = useIsMobile();
  const isTwoColumn = columnCount === 'two';
  const orderedArticles = useArticleLayout({
    articles,
    isMobile,
    isTwoColumn,
  });

  const containerClassName = clsx(styles['article-list-wrapper'], {
    [styles['two-grid-column']]: isTwoColumn,
    [styles['three-grid-column']]: !isTwoColumn,
  });

  return (
    <div className={containerClassName}>
      {orderedArticles.map((article) => (
        <ArticleCard key={article.url} {...article} />
      ))}

      {isTwoColumn && breakingNews && <BreakingNews {...breakingNews} />}
    </div>
  );
};
