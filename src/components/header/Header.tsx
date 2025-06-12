import { type FC } from 'react';
import { Input } from '@/components/ui/input';
import { IoSearchSharp } from 'react-icons/io5';
import { LuCast } from 'react-icons/lu';
import UserMenu from './UserMenu';

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between pl-4 pb-2 pt-2 pr-2 relative">
      <Input
        className="w-[30%] rounded-4xl bg-white/10 border-0 focus-visible:ring-1 pl-8"
        placeholder="What do you want to play?"
      />
      <IoSearchSharp className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60" />
      <div className="flex items-center gap-3 ">
        <LuCast
          size={36}
          className="stroke-[1.5px] p-1.5 hover:bg-white/10 hover:rounded-[10px] cursor-pointer"
        />
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
