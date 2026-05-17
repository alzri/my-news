'use client';
import { KeyboardEvent } from 'react';
import { Button } from '../button/Button';
import SearchIcon from '../../assets/icons/Search.svg';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onEnter: () => void;
  onSearchClick: () => void;
}

export const SearchBar = ({ value, onChange, onEnter, onSearchClick }: SearchBarProps) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onEnter();
    }
  };

  return (
    <div className={styles['search-bar-wrapper']}>
      <SearchIcon className={styles.icon} />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search news"
        className={styles['search-bar-input']}
      />
      <Button
        className={styles['search-button']}
        onClick={onSearchClick}
        component="button"
        version="red"
      >
        Search
      </Button>
    </div>
  );
};
