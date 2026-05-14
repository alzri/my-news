import { MenuItem } from './MenuItem';
import HomeIcon from '../../assets/icons/Home.svg';
import GeneralIcon from '../../assets/icons/General.svg';
import BusinessIcon from '../../assets/icons/Business.svg';
import HealthIcon from '../../assets/icons/Health.svg';
import ScienceIcon from '../../assets/icons/Science.svg';
import SportsIcon from '../../assets/icons/Sport.svg';
import TechnologyIcon from '../../assets/icons/Technology.svg';
import FavouritesIcon from '../../assets/icons/Favourite.svg';
import { usePathname } from 'next/navigation';

export const MenuContent = ({ onClick }: { onClick?: () => void }) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const items = [
    { icon: HomeIcon, title: 'Home', href: '/' },
    { icon: GeneralIcon, title: 'General', href: '/general' },
    { icon: BusinessIcon, title: 'Business', href: '/business' },
    { icon: HealthIcon, title: 'Health', href: '/health' },
    { icon: ScienceIcon, title: 'Science', href: '/science' },
    { icon: SportsIcon, title: 'Sports', href: '/sports' },
    { icon: TechnologyIcon, title: 'Technology', href: '/technology' },
    { icon: FavouritesIcon, title: 'Favourites', href: '/favourites' },
  ];

  return (
    <>
      {items.map((item) => (
        <MenuItem
          key={item.href}
          icon={item.icon}
          title={item.title}
          href={item.href}
          isActive={isActive(item.href)}
          onClick={onClick}
        />
      ))}
    </>
  );
};
