import { useMemo } from 'react';
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

  const orderedArticles = useMemo(() => {
    if (isTwoColumn) return articles.slice(0, 3);

    const paid = articles.filter((a) => a.isPaid);
    const free = articles.filter((a) => !a.isPaid);
    const result: typeof articles = [];
    const rows = Math.ceil(articles.length / 3);

    for (let row = 0; row < rows; row++) {
      for (let i = 0; i < 2; i++) {
        if (free.length) result.push(free.shift()!);
      }

      const shouldTryPaid = row % 2 === 0;
      if (shouldTryPaid && paid.length) {
        result.push(paid.shift()!);
      } else if (free.length) {
        result.push(free.shift()!);
      }
    }

    return result;
  }, [articles, isTwoColumn]);

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
