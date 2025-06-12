import { type FC } from 'react';

const PlaylistCard: FC = () => {
  return (
    <div className="bg-white/5 hover:bg-white/10 p-3 pb-1 rounded-[5px] w-[210px] cursor-pointer">
      <img
        src="https://cdn-images.dzcdn.net/images/cover/7a03f611f0d25cb00d19e4e01623178f/0x1900-000000-80-0-0.jpg"
        alt=""
        className="w-[200px] h-[190px] rounded-[5px] mb-2"
      />
      <p className='font-bold'>Juice Wrld</p>
      <p className='opacity-60 text-[14px]'>Pap, pop</p>
    </div>
  );
};

export default PlaylistCard;
