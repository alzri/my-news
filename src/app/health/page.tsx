import { ArticleList } from '../..//components/article-list/ArticleList';
import { articleNews } from '../../data/dummyNews';

export default function Health() {
  const filteredArticles = articleNews.filter((article) => article.category === 'health');

  return (
    <div>
      <ArticleList columnCount="three" articles={filteredArticles} />
    </div>
  );
}
