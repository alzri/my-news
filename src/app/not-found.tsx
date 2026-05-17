import Link from 'next/link';
import { Text } from '../components/text/Text';
import './globals.css';

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <Text component="h1" size="h1" color="primary">
        404
      </Text>

      <Text component="h2" size="h2" color="secondary">
        Page not found
      </Text>

      <Text component="p" size="paragraph-m" color="primary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </Text>

      <Link href="/" className="back-home-button">
        Back to home
      </Link>
    </div>
  );
}
