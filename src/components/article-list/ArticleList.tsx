'use client';
import { IArticleListProps } from './ArticleList.types';
import { ArticleCard } from '../article-card/ArticleCard';
import { BreakingNews } from '../breaking-news/BreakingNews';
import clsx from 'clsx';
import styles from './ArticleList.module.scss';

export const ArticleList = ({
  articles,
  breakingNews,
  columnCount = 'three',
}: IArticleListProps) => {
  const isTwoColumn = columnCount === 'two';

  const containerClassName = clsx(styles['article-list-wrapper'], {
    [styles['two-grid-column']]: isTwoColumn,
    [styles['three-grid-column']]: !isTwoColumn,
  });

  return (
    <section className={containerClassName}>
      {articles.map((article) => (
        <ArticleCard key={article.url} {...article} />
      ))}

      {isTwoColumn && breakingNews && <BreakingNews {...breakingNews} />}
    </section>
  );
};
