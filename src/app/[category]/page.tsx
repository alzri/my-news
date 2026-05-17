import { notFound } from 'next/navigation';
import { ArticleList } from '../../components/article-list/ArticleList';
import { Text } from '../../components/text/Text';
import { fetchAllNews } from '../../lib/fetchAllNews';
import styles from '../page.module.css';

const validCategories = [
  'general',
  'technology',
  'sports',
  'health',
  'science',
  'business',
] as const;

type Category = (typeof validCategories)[number];

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function NewsCategoryPage({ params }: Props) {
  const { category } = await params;

  if (!validCategories.includes(category as Category)) {
    notFound();
  }

  const articles = await fetchAllNews();

  const filteredArticles = articles.filter((article) => article.category === category);

  return (
    <>
      <Text className={styles.title} component="h2" size="h2" color="primary">
        {category.charAt(0).toUpperCase() + category.slice(1)} news
      </Text>

      <ArticleList columnCount="three" articles={filteredArticles} />
    </>
  );
}
