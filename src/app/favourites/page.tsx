'use client';
import { ArticleList } from '../../components/article-list/ArticleList';
import { Text } from '../../components/text/Text';
import { useFavorites } from '../../context/FavoritesContext';
import styles from '../page.module.css';

export default function Favourites() {
  const { favorites } = useFavorites();

  return (
    <>
      <Text className={styles.title} component="h2" size="h2" color="primary">
        Favourites news
      </Text>
      <ArticleList articles={favorites} />
    </>
  );
}
