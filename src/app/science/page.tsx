import { ArticleList } from '../..//components/article-list/ArticleList';
import { articleNews } from '../../data/dummyNews';

export default function Science() {
  const filteredArticles = articleNews.filter((article) => article.category === 'science');

  return (
    <div>
      <ArticleList columnCount="three" articles={filteredArticles} />
    </div>
  );
}
