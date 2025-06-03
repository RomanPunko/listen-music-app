import { type FC } from 'react';
import SideBarItem from './SideBarItem';
import { TiHome } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";

const SideBar: FC = () => {
  return (
    <div className="bg-secondary text-xl flex flex-col w-[200px] h-full border-r-1 border-border/30 ">
      <div className="flex flex-col flex-grow">
        <SideBarItem to="/home" icon={TiHome} label="Home" />
        <SideBarItem to="/search" icon={IoSearchSharp} label="Search" />
        <SideBarItem to="/favorite" icon={MdFavorite} label="Favorites" />
      </div>
    </div>
  );
};

export default SideBar;
