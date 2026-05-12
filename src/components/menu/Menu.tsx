'use client';

import { useState, useEffect } from 'react';
import styles from './Menu.module.scss';
import { MenuContent } from './MenuContent';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
              <MenuContent onClick={() => setIsOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
