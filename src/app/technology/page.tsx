import { ArticleList } from '../../components/article-list/ArticleList';
import { Text } from '../../components/text/Text';
import { articleNews } from '../../data/dummyNews';
import styles from '../page.module.css';

export default function Tehnology() {
  const filteredArticles = articleNews.filter((article) => article.category === 'tehnology');

  return (
    <>
      <Text className={styles.title} component="h2" size="h2" color="primary">
        Tehnology news
      </Text>
      <ArticleList columnCount="three" articles={filteredArticles} />
    </>
  );
}
