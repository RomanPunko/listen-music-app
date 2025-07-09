import { type FC } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import UserMenu from './UserMenu';
import SearchMenu from '../search-menu/Search';

const Header: FC = () => {
  

  return (
    <div className="flex items-center justify-between pl-4 pb-2 pt-2 pr-2 relative select-none">
      <SearchMenu/>
      <IoSearchSharp className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60" />
      <div className="mr-4">
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
