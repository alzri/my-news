import BannerImage from '../assets/ArticleImage.png';

const fallbackSrc = typeof BannerImage === 'string' ? BannerImage : BannerImage.src;

export function getArticleImage(urlToImage?: string | null) {
  const isValid = !!urlToImage && urlToImage.trim() !== '' && urlToImage !== 'null';

  return {
    src: isValid ? urlToImage! : fallbackSrc,
    fallbackSrc,
  };
}
