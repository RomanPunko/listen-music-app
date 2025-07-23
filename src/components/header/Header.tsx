import { useState, type FC } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import UserMenu from './UserMenu';
import SearchMenu from '../search-menu/Search';
import { IoIosMenu } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';

const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/home';
  const isFavoritesPage = location.pathname === '/favorite';

  const hundleMenuClick = () => {
    setOpenMenu(true);
  };

  if (openMenu) {
    return (
      <BurgerMenu
        setOpenMenu={setOpenMenu}
        isHomePage={isHomePage}
        isFavoritesPage={isFavoritesPage}
      />
    );
  }

  return (
    <div className="flex items-center justify-between pl-4 pb-2 pt-2 pr-2 relative select-none">
      <SearchMenu />
      <IoSearchSharp className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60" />
      <div className="flex items-center">
        <div className="hidden lg:mr-4 lg:block">
          <UserMenu />
        </div>
        <div className="lg:hidden block ml-2">
          <IoIosMenu size={36} onClick={hundleMenuClick} />
        </div>
      </div>
    </div>
  );
};

export default Header;
