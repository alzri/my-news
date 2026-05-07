import { IArticleCardProps } from './ArticleCard.types';
import styles from './ArticleCard.module.scss';
import { Text } from '../text/Text';
import Link from 'next/link';
import Image from 'next/image';
import BannerImage from '../../assets/ArticleImage.png';

export const ArticleCard = ({ href, category, title, author, isPaid }: IArticleCardProps) => {
  return (
    <div className={styles['article-wrapper']}>
      <Link href={href}>
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
