import { ArticleList } from '../components/article-list/ArticleList';
import styles from './page.module.css';
import { Text } from '../components/text/Text';
import { LatesNews } from '../components/lates-news/LatesNews';
import NewsMobileToggle from '../components/news-mobile-toggle/NewsMobileToggle';
import { fetchAllNews } from '../lib/fetchAllNews';
import { shuffle } from '../lib/utils/shuffle';
import { breakingNews } from '../data/dummyNews';

export default async function Home() {
  const articles = shuffle(await fetchAllNews());

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
    <main className={styles.main}>
      <div className={styles.desktop}>
        <Text className={styles.title} component="h2" size="h2" color="primary">
          News
        </Text>

        <div className={styles['top-section']}>
          <ArticleList columnCount="two" articles={articles} breakingNews={breakingNews} />
          <LatesNews articles={articles} />
        </div>

        <div className={styles['bottom-section']}>
          <ArticleList columnCount="three" articles={processedArticles} />
        </div>
      </div>

      <div className={styles.mobile}>
        <NewsMobileToggle />
      </div>
    </main>
  );
}
