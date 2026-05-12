import { ArticleList } from '../components/article-list/ArticleList';
import styles from './page.module.css';
import { articleNews, breakingNews, latestNews } from '../data/dummyNews';
import { Text } from '../components/text/Text';
import { LatesNews } from '../components/lates-news/LatesNews';
import { NewsMobileToggle } from '../components/news-mobile-toggle/NewsMobileToggle';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.desktop}>
        <Text className={styles.title} component="h2" size="h2" color="primary">
          News
        </Text>
        <div className={styles['top-section']}>
          <ArticleList columnCount="two" articles={articleNews} breakingNews={breakingNews} />
          <LatesNews articles={latestNews} />
        </div>
        <div className={styles['bottom-section']}>
          <ArticleList columnCount="three" articles={articleNews} />
        </div>
      </div>

      <div className={styles.mobile}>
        <NewsMobileToggle />
      </div>
    </main>
  );
}
