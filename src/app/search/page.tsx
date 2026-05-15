'use client';
import { useSearchParams } from 'next/navigation';
import { articleNews } from '../../data/dummyNews';
import { ArticleList } from '../../components/article-list/ArticleList';
import { Text } from '../../components/text/Text';
import styles from '../page.module.css';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const results = articleNews.filter((article) =>
    article.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Text className={styles.title} component="h2" size="h2" color="primary">
        Search results for: {query}
      </Text>
      <ArticleList articles={results} />
    </>
  );
}
