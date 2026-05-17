import { useRouter } from 'next/navigation';

export const useCategoryNavigation = (category: string) => {
  const router = useRouter();

  const handleCategoryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/${category.toLowerCase()}`);
  };

  return { handleCategoryClick };
};
