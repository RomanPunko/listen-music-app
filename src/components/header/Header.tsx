import { type FC } from 'react';
import AddAvatar from './AddAvatar';
import { IoIosLogOut } from 'react-icons/io';

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between pt-2 pb-3 pl-4 pr-4 bg-secondary relative border-b-1 border-border/30">
      <p className="text-4xl font-bold">LISTEN</p>
      <div className="flex items-center gap-5">
        <AddAvatar />
        <div className=" p-1 hover:bg-white/20 hover:rounded-[10px] cursor-pointer">
          <IoIosLogOut size={36}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
