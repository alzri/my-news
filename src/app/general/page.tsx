import { ArticleList } from '@/src/components/article-list/ArticleList';
import { articleNews } from '../..//data/dummyNews';

export default function General() {
  const filteredArticles = articleNews.filter((article) => article.category === 'general');

  return (
    <div>
      <ArticleList columnCount="three" articles={filteredArticles} />
    </div>
  );
}
