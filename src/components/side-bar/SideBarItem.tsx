import { type FC } from 'react';
import { type IconType } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';

interface INavItemProps {
  to: string;
  icon: IconType;
  label: string;
}

const SideBarItem: FC<INavItemProps> = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <div className="flex items-center w-full">
      <Link
        to={to}
        className={`flex gap-2 items-center w-full py-5 pl-3 active:bg-white/10 ${
          isActive ? 'bg-white/10 ' : 'hover:bg-white/5'
        }`}
      >
        <Icon size={24}/>
        <p>{label}</p>
      </Link>
    </div>
  );
};

export default SideBarItem;
