import BannerImage from '../assets/ArticleImage.png';

const fallbackSrc = typeof BannerImage === 'string' ? BannerImage : BannerImage.src;

function isSafeImageUrl(value?: string | null) {
  if (!value) return false;

  const trimmed = value.trim();
  if (trimmed === '' || trimmed === 'null') return false;

  try {
    const url = new URL(trimmed);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;

    return /\.(png|jpe?g|webp|gif|avif)(\?|$)/i.test(url.pathname);
  } catch {
    return false;
  }
}

export function getArticleImage(urlToImage?: string | null) {
  const isValid = isSafeImageUrl(urlToImage);

  return {
    src: isValid ? urlToImage!.trim() : fallbackSrc,
    fallbackSrc,
  };
}
