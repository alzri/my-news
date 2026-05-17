import { fetchAllNews } from '../../lib/fetchAllNews';
import { ArticleList } from '../../components/article-list/ArticleList';
import { Text } from '../../components/text/Text';
import styles from '../page.module.css';

export default async function General() {
  const articles = await fetchAllNews();
  const filteredArticles = articles.filter((article) => article.category === 'general');

  return (
    <>
      <Text className={styles.title} component="h2" size="h2" color="primary">
        General news
      </Text>
      <ArticleList columnCount="three" articles={filteredArticles} />
    </>
  );
}
