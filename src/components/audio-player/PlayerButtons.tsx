import { type FC } from 'react';
import { IoIosPlay } from 'react-icons/io';
import { IoIosSkipBackward } from 'react-icons/io';
import { IoIosSkipForward } from 'react-icons/io';
// import { IoPause } from "react-icons/io5";

const PlayerButtons: FC = () => {
  return (
    <div className="flex items-center justify-center gap-5 mt-[5px]">
      <IoIosSkipBackward size={36} className="p-1 fill-current cursor-pointer hover:bg-white/5 hover:rounded-[10px]" />
      <IoIosPlay size={40} className="p-1 fill-current cursor-pointer hover:bg-white/5 hover:rounded-[10px]" />
      <IoIosSkipForward size={36} className="p-1 fill-current cursor-pointer  hover:bg-white/5 hover:rounded-[10px]" />
    </div>
  );
};

export default PlayerButtons;
