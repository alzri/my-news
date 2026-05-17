import { ArticleList } from '../../components/article-list/ArticleList';
import { Text } from '../../components/text/Text';
import { fetchAllNews } from '../../lib/fetchAllNews';
import styles from '../page.module.css';

export default async function Business() {
  const articles = await fetchAllNews();
  const filteredArticles = articles.filter((article) => article.category === 'business');

  return (
    <>
      <Text className={styles.title} component="h2" size="h2" color="primary">
        Business news
      </Text>
      <ArticleList columnCount="three" articles={filteredArticles} />
    </>
  );
}
