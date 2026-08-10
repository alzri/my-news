import { ArticleList } from '../components/article-list/ArticleList';
import { Text } from '../components/text/Text';
import { LatestNews } from '../components/latest-news/LatestNews';
import NewsToggle from '../components/news-toggle/NewsToggle';
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

  const mainFeedSource = sortedArticles.slice(10);
  const mainArticles = addPaidFlag(mainFeedSource.slice(0, 3));
  const restArticles = addPaidFlag(mainFeedSource.slice(3));
  const latestFeed = sortedArticles.slice(0, 50);
  const mobileArticles = addPaidFlag(mainFeedSource);

  return (
    <main>
      <div className="desktop">
        <Text className="title" component="h2" size="h2" color="primary">
          News
        </Text>

        <div className="top-section">
          <ArticleList columnCount="two" articles={mainArticles} breakingNews={breaking} />

          <LatestNews articles={latestFeed} />
        </div>

        <div className="bottom-section">
          <ArticleList columnCount="three" articles={restArticles} />
        </div>
      </div>
      <div className="mobile">
        <NewsToggle featuredArticles={mobileArticles} latestArticles={latestFeed} />
      </div>
    </main>
  );
}
