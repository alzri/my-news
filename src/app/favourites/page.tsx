'use client';

import { ArticleList } from '../../components/article-list/ArticleList';
import { Text } from '../../components/text/Text';
import styles from '../page.module.css';
import { useFavorites } from '../../context/FavoritesContext';

export default function Favourites() {
  const { favorites } = useFavorites();

  return (
    <div>
      <Text className={styles.title} component="h2" size="h2" color="primary">
        Favourites news
      </Text>

      <ArticleList articles={favorites} />
    </div>
  );
}
