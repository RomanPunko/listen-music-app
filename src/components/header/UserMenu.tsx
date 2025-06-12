import { type FC } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CiUser } from 'react-icons/ci';
import LogOut from './LogOut';

const UserMenu: FC = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <CiUser
          size={36}
          className="stroke-[0.5px] p-1.5 hover:bg-white/10 hover:rounded-[10px] cursor-pointer"
        />
      </PopoverTrigger>
      <PopoverContent
        className="border-border/30 w-auto min-w-[180px] bg-neutral-800 text-white rounded-xl shadow-lg p-4 flex flex-col gap-3 "
        align="end"
        sideOffset={8}
        side="bottom"
      >
        <div className="pb-1 text-sm text-neutral-300 whitespace-nowrap truncate border-b-2 border-border/30">
          romanpunko@gmail.com
        </div>
        <LogOut />
      </PopoverContent>
    </Popover>
  );
};

export default UserMenu;
