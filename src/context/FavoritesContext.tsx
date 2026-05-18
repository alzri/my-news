'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { getFavorites, toggleFavorite as toggleFavoriteDB } from '../utils/favoritesDB';
import { IArticleCardProps } from '../components/article-card/ArticleCard.types';

type FavoritesContextType = {
  favorites: IArticleCardProps[];
  toggleFavorite: (article: IArticleCardProps) => void;
  isFavorite: (url: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<IArticleCardProps[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getFavorites();
      setFavorites(data);
    })();
  }, []);

  const toggleFavorite = async (article: IArticleCardProps) => {
    const updated = await toggleFavoriteDB(article);
    setFavorites(updated);
  };

  const isFavorite = (url: string) => {
    return favorites.some((a) => a.url === url);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be used inside provider');
  return ctx;
};
