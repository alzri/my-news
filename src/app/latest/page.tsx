import { ArticleList } from '../../components/article-list/ArticleList';
import { Text } from '../../components/text/Text';
import { fetchAllNews } from '../../lib/fetchAllNews';
import '../globals.css';

export default async function LatestPage() {
  const articles = (await fetchAllNews()).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <main>
      <Text className="title" component="h2" size="h2" color="primary">
        Latest news
      </Text>

      <ArticleList columnCount="three" articles={articles} />
    </main>
  );
}
