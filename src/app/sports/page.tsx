import { ArticleList } from '../..//components/article-list/ArticleList';
import { articleNews } from '../../data/dummyNews';

export default function Sports() {
  const filteredArticles = articleNews.filter((article) => article.category === 'sports');

  return (
    <div>
      <ArticleList columnCount="three" articles={filteredArticles} />
    </div>
  );
}
