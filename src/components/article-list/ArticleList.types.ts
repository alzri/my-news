import { IArticleCardProps } from '../article-card/ArticleCard.types';
import { IBreakingNewsProps } from '../breaking-news/BreakingNews.types';

export interface IArticleListProps {
  articles: IArticleCardProps[];
  breakingNews: IBreakingNewsProps;
  columnCount?: 'two' | 'three';
}
