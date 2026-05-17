import { ArticleList } from '../../components/article-list/ArticleList';
import { Text } from '../../components/text/Text';
import styles from '../page.module.css';
import { fetchAllNews } from '@/src/lib/fetchAllNews';

interface SearchPageProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.query?.trim().toLowerCase() || '';
  const articles = await fetchAllNews();
  const results = query
    ? articles.filter((article) => article.title?.toLowerCase().includes(query))
    : [];

  return (
    <>
      <Text className={styles.title} component="h2" size="h2" color="primary">
        Search results for: {query || '...'}
      </Text>

      {results.length > 0 ? (
        <ArticleList articles={results} />
      ) : (
        <Text component="p" size={'paragraph-s'} color={'primary'}>
          No articles found
        </Text>
      )}
    </>
  );
}
