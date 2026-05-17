'use client';
import { SearchBar } from '../../components/search-bar/SearchBar';
import LogoIcon from '../../assets/Logo.png';
import Image from 'next/image';
import { useSearch } from '../../hooks/useSearch';
import Link from 'next/link';
import styles from './Header.module.scss';

export const Header = () => {
  const { search, handleSearch, submitSearch } = useSearch();

  return (
    <header className={styles.header}>
      <div className={styles['header-content']}>
        <nav>
          <Link href="/">
            <Image
              className={styles.logo}
              src={LogoIcon}
              alt="Website Logo"
              width={139}
              height={39}
              priority
            />
          </Link>
        </nav>

        <SearchBar
          value={search}
          onChange={handleSearch}
          onEnter={submitSearch}
          onSearchClick={submitSearch}
        />
      </div>
    </header>
  );
};
