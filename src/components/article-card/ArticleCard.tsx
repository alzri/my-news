'use client';
import { IArticleCardProps } from './ArticleCard.types';
import styles from './ArticleCard.module.scss';
import { Text } from '../text/Text';
import Link from 'next/link';
import Image from 'next/image';
import BannerImage from '../../assets/ArticleImage.png';
import { useFavorites } from '../../context/FavoritesContext';
import FavouritesIcon from '../../assets/icons/Favourite.svg';

export const ArticleCard = ({ url, category, title, author, isPaid }: IArticleCardProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(url);
  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    toggleFavorite({
      url,
      category,
      title,
      author,
      isPaid,
    });
  };

  return (
    <div className={styles['article-wrapper']}>
      <Link href={url}>
        <div className={styles['article-banner']}>
          <button
            className={`${styles.favorite} ${favorite ? styles.active : ''}`}
            onClick={handleFavorite}
          >
            <FavouritesIcon className={`${styles.icon} ${favorite ? styles.active : ''}`} />
          </button>
          {isPaid && (
            <Text
              className={styles['article-paid-badge']}
              component={'span'}
              size={'paragraph-xs'}
              color={'tertiary'}
            >
              AD
            </Text>
          )}
          <Image src={BannerImage} alt={title} width={320} height={140} />
        </div>
        <div className={styles['article-content']}>
          <Text
            className={styles.category}
            component={'p'}
            size={'paragraph-xs'}
            color={'accent-primary'}
          >
            {category}
          </Text>
          <Text className={styles.title} component={'h3'} size={'h3'} color={'secondary'}>
            {title}
          </Text>
          <Text className={styles.author} component={'p'} size={'paragraph-s'} color={'primary'}>
            {author}
          </Text>
        </div>
      </Link>
    </div>
  );
};
