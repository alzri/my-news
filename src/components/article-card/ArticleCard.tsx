'use client';
import { IArticleCardProps } from './ArticleCard.types';
import { Text } from '../text/Text';
import Image from 'next/image';
import Link from 'next/link';
import { useFavorites } from '../../context/FavoritesContext';
import FavouritesIcon from '../../assets/icons/Favourite.svg';
import { useCategoryNavigation } from '../../hooks/useCategoryNavigation';
import styles from './ArticleCard.module.scss';
import { getArticleImage } from '@/src/utils/image.utils';

export const ArticleCard = ({
  url,
  category,
  title,
  author,
  isPaid,
  urlToImage,
}: IArticleCardProps) => {
  const { src, fallbackSrc } = getArticleImage(urlToImage);
  const { handleCategoryClick } = useCategoryNavigation(category);

  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(url);
  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    toggleFavorite({
      url,
      category,
      title,
      author,
      isPaid,
      urlToImage,
    });
  };

  return (
    <div className={styles['article-wrapper']}>
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles['article-wrapper']}
      >
        <div className={styles['article-banner']}>
          {isPaid && (
            <Text
              className={styles['article-paid-badge']}
              component="span"
              size="paragraph-xs"
              color="tertiary"
            >
              AD
            </Text>
          )}

          <div className={styles['image-wrapper']}>
            <Image
              src={src}
              alt={title}
              fill
              onError={(e) => {
                (e.target as HTMLImageElement).src = fallbackSrc;
              }}
            />
          </div>
        </div>

        <div className={styles['article-content']}>
          <Text
            className={styles.category}
            component="p"
            size="paragraph-xs"
            color="accent-primary"
            onClick={handleCategoryClick}
          >
            {category}
          </Text>

          <Text className={styles.title} component="h3" size="h3" color="secondary">
            {title}
          </Text>

          <Text className={styles.author} component="p" size="paragraph-s" color="primary">
            {author}
          </Text>
        </div>
      </Link>

      <div className={styles.overlay}>
        <button
          className={`${styles.favorite} ${favorite ? styles.active : ''}`}
          onClick={handleFavorite}
        >
          <FavouritesIcon className={`${styles.icon} ${favorite ? styles.active : ''}`} />
        </button>
      </div>
    </div>
  );
};
