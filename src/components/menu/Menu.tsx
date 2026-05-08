import { MenuItem } from './MenuItem';
import HomeIcon from '../../assets/icons/Home.svg';
import GeneralIcon from '../../assets/icons/General.svg';
import BusinessIcon from '../../assets/icons/Business.svg';
import HealthIcon from '../../assets/icons/Health.svg';
import ScienceIcon from '../../assets/icons/Science.svg';
import SportsIcon from '../../assets/icons/Sport.svg';
import TechnologyIcon from '../../assets/icons/Technology.svg';
import styles from './Menu.module.scss';

export const Menu = () => {
  return (
    <div className={styles['menu-wrapper']}>
      <MenuItem icon={HomeIcon} title={'Home'} href={'/'} />
      <MenuItem icon={GeneralIcon} title={'General'} href={'/general'} />
      <MenuItem icon={BusinessIcon} title={'Business'} href={'/business'} />
      <MenuItem icon={HealthIcon} title={'Health'} href={'/health'} />
      <MenuItem icon={ScienceIcon} title={'Science'} href={'/science'} />
      <MenuItem icon={SportsIcon} title={'Sports'} href={'/sports'} />
      <MenuItem icon={TechnologyIcon} title={'Technology'} href={'/technology'} />
    </div>
  );
};
