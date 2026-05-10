import { IArticleListProps } from './ArticleList.types';
import { ArticleCard } from '../article-card/ArticleCard';
import { BreakingNews } from '../breaking-news/BreakingNews';
import clsx from 'clsx';
import styles from './ArticleList.module.scss';

export const ArticleList = ({ articles, breakingNews, columnCount }: IArticleListProps) => {
  const classNames = clsx(
    styles['article-list-wrapper'],
    styles[columnCount === 'two' ? 'two-grid-column' : 'three-grid-column']
  );

  return (
    <div className={classNames}>
      {columnCount === 'two' && breakingNews && (
        <>
          {articles.slice(0, 3).map((article) => (
            <ArticleCard
              key={article.href}
              title={article.title}
              href={article.href}
              category={article.category}
              author={article.author}
              isPaid={false}
            />
          ))}

          <BreakingNews {...breakingNews} />
        </>
      )}
    </div>
  );
};
