import { cache } from 'react';
import { fetchNewsByCategory, NewsCategory } from './newsApi';

const categories: NewsCategory[] = [
  'general',
  'technology',
  'sports',
  'health',
  'science',
  'business',
];

export const fetchAllNews = cache(async function fetchAllNews() {
  const results = await Promise.all(categories.map((category) => fetchNewsByCategory(category)));

  const flat = results.flat();
  const seen = new Set<string>();
  const uniqueArticles = flat.filter((article) => {
    if (!article.url) return false;

    if (seen.has(article.url)) return false;

    seen.add(article.url);
    return true;
  });

  return uniqueArticles;
});
