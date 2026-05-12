import { ArticleList } from '../..//components/article-list/ArticleList';
import { articleNews } from '../../data/dummyNews';

export default function Tehnology() {
  const filteredArticles = articleNews.filter((article) => article.category === 'tehnology');

  return (
    <div>
      <ArticleList columnCount="three" articles={filteredArticles} />
    </div>
  );
}
