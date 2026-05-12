import { ArticleList } from '../..//components/article-list/ArticleList';
import { articleNews } from '../../data/dummyNews';

export default function Business() {
  const filteredArticles = articleNews.filter((article) => article.category === 'business');

  return (
    <div>
      <ArticleList columnCount="three" articles={filteredArticles} />
    </div>
  );
}
