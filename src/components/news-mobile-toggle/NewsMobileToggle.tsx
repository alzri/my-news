import { NewsMobileToggleClient } from './NewsMobileToggleClient';
import { fetchAllNews } from '../../lib/fetchAllNews';
import { latestNews } from '../../data/dummyNews';

export default async function NewsMobileToggle() {
  const articles = await fetchAllNews();

  return <NewsMobileToggleClient articles={articles} latestNews={latestNews} />;
}
