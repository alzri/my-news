import { NewsMobileToggleClient } from './NewsMobileToggleClient';
import { fetchAllNews } from '../../lib/fetchAllNews';
import { sortByNewestFirst } from '@/src/lib/articlesLayout';

export default async function NewsMobileToggle() {
  const allArticles = await fetchAllNews();
  const sortedArticles = sortByNewestFirst(allArticles);

  return <NewsMobileToggleClient articles={allArticles} latestNews={sortedArticles} />;
}
