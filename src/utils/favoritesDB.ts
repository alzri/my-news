'use client';

import { IDBPDatabase, openDB } from 'idb';
import { IArticleCardProps } from '../components/article-card/ArticleCard.types';

const DB_NAME = 'mynews-db';
const STORE_NAME = 'favorites';
let dbPromise: Promise<IDBPDatabase> | null = null;

const getDB = () => {
  if (typeof window === 'undefined') return null;

  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, {
            keyPath: 'url',
          });
        }
      },
    });
  }

  return dbPromise;
};

const getAllFavorites = async (): Promise<IArticleCardProps[]> => {
  const db = await getDB();
  if (!db) return [];

  return db.getAll(STORE_NAME);
};

export const getFavorites = async (): Promise<IArticleCardProps[]> => {
  return getAllFavorites();
};

export const toggleFavorite = async (article: IArticleCardProps): Promise<IArticleCardProps[]> => {
  const db = await getDB();
  if (!db) return [];

  const existing = await db.get(STORE_NAME, article.url);

  if (existing) {
    await db.delete(STORE_NAME, article.url);
  } else {
    await db.put(STORE_NAME, article);
  }

  return getAllFavorites();
};

export const isFavorite = async (url: string): Promise<boolean> => {
  const db = await getDB();
  if (!db) return false;

  return !!(await db.get(STORE_NAME, url));
};
