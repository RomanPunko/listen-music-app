import type { FC } from 'react';
import LogOut from './LogOut';
import { Link } from 'react-router-dom';

interface BurgerMenuProps {
  setOpenMenu: (open: boolean) => void;
  isHomePage: boolean;
  isFavoritesPage: boolean;
}


const BurgerMenu: FC<BurgerMenuProps> = ({setOpenMenu, isHomePage, isFavoritesPage}) => {

    return (
      <div className="bg-black/95 w-screen h-screen absolute top-0 left-0 z-50 flex items-center justify-center flex-col gap-4">
        <Link
          to={'/home'}
          className={`text-2xl ${isHomePage ? 'underline' : ''}`}
          onClick={() => setOpenMenu(false)}
        >
          Home
        </Link>
        <Link
          to={'/favorite'}
          className={`text-2xl ${isFavoritesPage ? 'underline' : ''}`}
          onClick={() => setOpenMenu(false)}
        >
          My favorite
        </Link>
        <LogOut />
      </div>
    );
};

export default BurgerMenu;
