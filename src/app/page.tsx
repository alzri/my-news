import { ArticleList } from '../components/article-list/ArticleList';
import { Text } from '../components/text/Text';
import { LatesNews } from '../components/lates-news/LatesNews';
import NewsMobileToggle from '../components/news-mobile-toggle/NewsMobileToggle';
import { fetchAllNews } from '../lib/fetchAllNews';
import { sortByNewestFirst, addPaidFlag } from '../lib/articlesLayout';
import './globals.css';

export default async function Home() {
  const allArticles = await fetchAllNews();
  const sortedArticles = sortByNewestFirst(allArticles);
  const breakingArticle = sortedArticles[3];

  const breaking = {
    title: breakingArticle.title,
    author: breakingArticle.author,
    url: breakingArticle.url,
  };

  const mainArticles = sortedArticles.slice(0, 3);
  const restArticles = sortedArticles.slice(4);
  const processedMain = addPaidFlag(mainArticles);
  const processedRest = addPaidFlag(restArticles);

  return (
    <main>
      <div className="desktop">
        <Text className="title" component="h2" size="h2" color="primary">
          News
        </Text>

        <div className="top-section">
          <ArticleList columnCount="two" articles={processedMain} breakingNews={breaking} />

          <LatesNews articles={sortedArticles} />
        </div>

        <div className="bottom-section">
          <ArticleList columnCount="three" articles={processedRest} />
        </div>
      </div>

      <div className="mobile">
        <NewsMobileToggle />
      </div>
    </main>
  );
}
