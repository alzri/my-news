import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import BannerImage from '../../../assets/ArticleImage.png';
const fallbackSrc = typeof BannerImage === 'string' ? BannerImage : BannerImage.src;
const fallbackFilePath = path.join(process.cwd(), 'src', 'assets', 'ArticleImage.png');

function isValidImageUrl(value?: string | null) {
  if (!value) return false;

  const trimmed = value.trim();
  if (!trimmed) return false;

  try {
    const url = new URL(trimmed);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;

    return /\.(png|jpe?g|webp|gif|avif|bmp|tiff)(\?|$)/i.test(url.pathname);
  } catch {
    return false;
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url).searchParams.get('url');

  if (!isValidImageUrl(url)) {
    try {
      const file = await fs.readFile(fallbackFilePath);
      return new Response(file, {
        status: 200,
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=3600, stale-while-revalidate=59',
        },
      });
    } catch {
      return NextResponse.json({ error: 'Invalid image URL' }, { status: 400 });
    }
  }

  try {
    const response = await fetch(url!, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        Referer: new URL(url!).origin,
      },
    });

    if (!response.ok) {
      const file = await fs.readFile(fallbackFilePath);
      return new Response(file, {
        status: 200,
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=3600, stale-while-revalidate=59',
        },
      });
    }

    const contentType = response.headers.get('content-type') ?? 'image/jpeg';
    if (!contentType.startsWith('image/')) {
      const file = await fs.readFile(fallbackFilePath);
      return new Response(file, {
        status: 200,
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=3600, stale-while-revalidate=59',
        },
      });
    }

    const body = await response.arrayBuffer();
    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=59',
      },
    });
  } catch {
    try {
      const file = await fs.readFile(fallbackFilePath);
      return new Response(file, {
        status: 200,
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=3600, stale-while-revalidate=59',
        },
      });
    } catch {
      return NextResponse.json({ error: 'Failed to fetch image' }, { status: 502 });
    }
  }
}
