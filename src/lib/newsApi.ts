const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export type NewsCategory = 'general' | 'technology' | 'sports' | 'health' | 'science' | 'business';

type ApiArticle = {
  url: string;
  title: string;
  author: string | null;
  urlToImage: string | null;
  publishedAt: string;
};

type ApiResponse = {
  articles: ApiArticle[];
};

export async function fetchNewsByCategory(category: NewsCategory) {
  const res = await fetch(`${BASE_URL}?country=us&category=${category}&pageSize=10`, {
    headers: {
      'X-Api-Key': API_KEY!,
    },
    next: {
      revalidate: 1800,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${category}`);
  }

  const data = (await res.json()) as ApiResponse;

  return data.articles.map((article) => ({
    url: article.url,
    title: article.title,
    author: article.author || 'Unknown',
    category,
    urlToImage: article.urlToImage ?? '',
    isPaid: false,
    publishedAt: article.publishedAt,
  }));
}
