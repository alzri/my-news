'use client';
import { useState, useEffect } from 'react';
import { MenuContent } from './MenuContent';
import LogoIcon from '../../assets/Logo.png';
import { SearchBar } from '../search-bar/SearchBar';
import { useSearch } from '../../hooks/useSearch';
import Image from 'next/image';
import styles from './Menu.module.scss';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const { search, handleSearch, submitSearch } = useSearch(() => {
    setIsOpen(false);
  });

  return (
    <div className={styles['menu-wrapper']}>
      <div className={styles.desktop}>
        <MenuContent />
      </div>

      <div className={styles.mobile}>
        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>

        {isOpen && (
          <div className={styles.overlay} onClick={() => setIsOpen(false)}>
            <div
              className={`${styles['mobile-content']} ${styles.show}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles['mobile-content-top']}>
                <Image
                  src={LogoIcon}
                  alt="Website Logo"
                  width={139}
                  height={39}
                  className={styles.logo}
                />
                <SearchBar
                  value={search}
                  onChange={handleSearch}
                  onEnter={submitSearch}
                  onSearchClick={submitSearch}
                />
              </div>
              <div className={styles['mobile-content-menu']}>
                <MenuContent onClick={() => setIsOpen(false)} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
