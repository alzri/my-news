import { useMemo } from 'react';
import { IArticleCardProps } from '../components/article-card/ArticleCard.types';

type Params = {
  articles: IArticleCardProps[];
  isMobile: boolean;
  isTwoColumn: boolean;
};

export const useArticleLayout = ({ articles, isMobile, isTwoColumn }: Params) => {
  return useMemo(() => {
    if (isMobile) return articles;

    const twoColumn = articles.slice(0, 3);
    const reservedUrls = new Set(twoColumn.map((a) => a.url));
    const remaining = articles.filter((a) => !reservedUrls.has(a.url));

    if (isTwoColumn) return twoColumn;

    const paid = remaining.filter((a) => a.isPaid);
    const free = remaining.filter((a) => !a.isPaid);
    const result: IArticleCardProps[] = [];
    const rows = Math.ceil(remaining.length / 3);

    for (let row = 0; row < rows; row++) {
      for (let i = 0; i < 2; i++) {
        const item = free.shift();
        if (item) result.push(item);
      }

      const shouldTryPaid = row % 2 === 0;

      const item = shouldTryPaid ? paid.shift() : free.shift();

      if (item) result.push(item);
    }
    return result.length > 0 ? result : articles;
  }, [articles, isMobile, isTwoColumn]);
};
