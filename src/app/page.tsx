import { ArticleList } from '../components/article-list/ArticleList';
import { Text } from '../components/text/Text';
import { LatesNews } from '../components/lates-news/LatesNews';
import NewsMobileToggle from '../components/news-mobile-toggle/NewsMobileToggle';
import { fetchAllNews } from '../lib/fetchAllNews';
import { breakingNews } from '../data/dummyNews';
import './globals.css';

export default async function Home() {
  const articles = (await fetchAllNews()).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const processedArticles = articles.map((article, index) => {
    const rowSize = 3;
    const row = Math.floor(index / rowSize);
    const positionInRow = index % rowSize;
    const isPaid = (row % 2 === 0 && positionInRow === 2) || (row === 3 && positionInRow === 2);

    return {
      ...article,
      isPaid,
    };
  });

  return (
    <main>
      <div className="desktop">
        <Text className="title" component="h2" size="h2" color="primary">
          News
        </Text>

        <div className="top-section">
          <ArticleList columnCount="two" articles={articles} breakingNews={breakingNews} />
          <LatesNews articles={articles} />
        </div>

        <div className="bottom-section">
          <ArticleList columnCount="three" articles={processedArticles} />
        </div>
      </div>

      <div className="mobile">
        <NewsMobileToggle />
      </div>
    </main>
  );
}
