'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const useSearch = (onSubmit?: () => void) => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const submitSearch = () => {
    if (!search.trim()) return;

    router.push(`/search?query=${encodeURIComponent(search)}`);
    onSubmit?.();
    setSearch('');
  };

  return {
    search,
    handleSearch,
    submitSearch,
  };
};
