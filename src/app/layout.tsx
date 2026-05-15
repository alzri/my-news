import type { Metadata } from 'next';
import './globals.css';
import { Menu } from '../components/menu/Menu';
import { CTABanner } from '../components/CTABanner/CTABanner';
import { FavoritesProvider } from '../context/FavoritesContext';
import { Header } from '../components/header/Header';

export const metadata: Metadata = {
  title: 'MyNews',
  description: 'MyNews je web aplikacija za brzo pregledavanje vijesti i članaka.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CTABanner
          title="Make MyNews your homepage"
          desc="Get quick access to the latest news every day"
          acceptAction={{ label: 'Get' }}
          declineAction={{ label: 'No, thanks' }}
        />
        <Header />
        <div className="layout">
          <Menu />
          <div className="content">
            <FavoritesProvider>{children}</FavoritesProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
