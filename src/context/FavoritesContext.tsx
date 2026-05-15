'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getFavorites, toggleFavorite as toggleFavoriteStorage } from '../utils/favoritesDB';
import { IArticleCardProps } from '../components/article-card/ArticleCard.types';

interface FavoritesContextType {
  favorites: IArticleCardProps[];
  toggleFavorite: (article: IArticleCardProps) => Promise<void>;
  isFavorite: (url: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<IArticleCardProps[]>([]);

  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  const toggleFavorite = async (article: IArticleCardProps) => {
    await toggleFavoriteStorage(article);
    const updated = await getFavorites();
    setFavorites(updated);
  };

  const isFavorite = (url: string) => favorites.some((fav) => fav.url === url);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used inside FavoritesProvider');
  }

  return context;
};
