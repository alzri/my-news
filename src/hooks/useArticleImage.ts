import { useState } from 'react';
import BannerImage from '../assets/ArticleImage.png';

export const useArticleImage = (urlToImage?: string | null) => {
  const fallbackSrc = typeof BannerImage === 'string' ? BannerImage : BannerImage.src;

  const isValidImage = (url?: string | null) => !!url && url.trim() !== '' && url !== 'null';

  const [imgSrc, setImgSrc] = useState(isValidImage(urlToImage) ? urlToImage! : fallbackSrc);

  const handleError = () => setImgSrc(fallbackSrc);

  return { imgSrc, handleError };
};
