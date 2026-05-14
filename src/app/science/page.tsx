import { ArticleList } from '../../components/article-list/ArticleList';
import { Text } from '../../components/text/Text';
import { articleNews } from '../../data/dummyNews';
import styles from '../page.module.css';

export default function Science() {
  const filteredArticles = articleNews.filter((article) => article.category === 'science');

  return (
    <div>
      <Text className={styles.title} component="h2" size="h2" color="primary">
        Science news
      </Text>
      <ArticleList columnCount="three" articles={filteredArticles} />
    </div>
  );
}
