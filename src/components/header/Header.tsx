import { type FC } from 'react';
import { Input } from '@/components/ui/input';
import { IoSearchSharp } from 'react-icons/io5';
import UserMenu from './UserMenu';

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between pl-4 pb-2 pt-2 pr-2 relative select-none">
      <Input
        className="w-[30%] rounded-4xl bg-white/10 border-0 focus-visible:ring-1 pl-8"
        placeholder="What do you want to play?"
      />
      <IoSearchSharp className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60" />
      <div className="mr-4">
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
