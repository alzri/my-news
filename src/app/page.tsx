import { ArticleList } from '../components/article-list/ArticleList';
import styles from './page.module.css';
import { Text } from '../components/text/Text';
import { LatesNews } from '../components/lates-news/LatesNews';
import NewsMobileToggle from '../components/news-mobile-toggle/NewsMobileToggle';
import { fetchAllNews } from '../lib/fetchAllNews';
import { shuffle } from '../lib/utils/shuffle';

export default async function Home() {
  const articles = shuffle(await fetchAllNews());

  return (
    <main className={styles.main}>
      <div className={styles.desktop}>
        <Text className={styles.title} component="h2" size="h2" color="primary">
          News
        </Text>

        <div className={styles['top-section']}>
          <ArticleList columnCount="two" articles={articles} />
          <LatesNews articles={articles.slice(0, 5)} />
        </div>

        <div className={styles['bottom-section']}>
          <ArticleList columnCount="three" articles={articles} />
        </div>
      </div>

      <div className={styles.mobile}>
        <NewsMobileToggle />
      </div>
    </main>
  );
}
