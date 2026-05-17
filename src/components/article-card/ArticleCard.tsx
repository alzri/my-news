'use client';

import { IArticleCardProps } from './ArticleCard.types';
import { Text } from '../text/Text';
import Image from 'next/image';
import BannerImage from '../../assets/ArticleImage.png';
import { useFavorites } from '../../context/FavoritesContext';
import FavouritesIcon from '../../assets/icons/Favourite.svg';
import styles from './ArticleCard.module.scss';
import { useState } from 'react';

export const ArticleCard = ({
  url,
  category,
  title,
  author,
  isPaid,
  urlToImage,
}: IArticleCardProps) => {
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
      urlToImage,
    });
  };

  const fallbackSrc = typeof BannerImage === 'string' ? BannerImage : BannerImage.src;

  const isValidImage = (url?: string | null) => !!url && url.trim() !== '' && url !== 'null';

  const [imgSrc, setImgSrc] = useState(isValidImage(urlToImage) ? urlToImage! : fallbackSrc);

  return (
    <div className={styles['article-wrapper']}>
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles['article-wrapper']}>
        <div className={styles['article-banner']}>
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

          <div className={styles['image-wrapper']}>
            <Image src={imgSrc} alt={title} fill onError={() => setImgSrc(fallbackSrc)} />
          </div>
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
      </a>

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
