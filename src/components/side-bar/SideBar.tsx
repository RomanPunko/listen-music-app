import { type FC } from 'react';
import SideBarItem from './SideBarItem';
import { TiHome } from "react-icons/ti";
import { MdFavorite } from "react-icons/md";

const SideBar: FC = () => {
  return (
    <div className=" hidden bg-secondary text-[18px] lg:flex flex-col min-w-[160px] h-full border-r-1 border-border/30 select-none">
      <p className="text-3xl font-bold p-3 ">LISTEN</p>
      <div className="flex flex-col flex-grow">
        <SideBarItem to="/home" icon={TiHome} label="Home" />
        <SideBarItem to="/favorite" icon={MdFavorite} label="Favorites" />
      </div>
    </div>
  );
};

export default SideBar;
