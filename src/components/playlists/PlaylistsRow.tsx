import { type FC } from 'react';
import PlaylistCard from './PlaylistCard';
import { type IAllPlaylists, type IPlaylist } from '@/api/data-types/playlist-data-types';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface IPlaylistsRowProps {
  playlists: IAllPlaylists | [];
  category: string;
}

const PlaylistsRow: FC<IPlaylistsRowProps> = ({ playlists, category }) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <p className="uppercase font-bold w-fit">{category}</p>
      <Carousel className="w-full relative">
        <CarouselContent className="gap-4">
          {playlists?.map((item: IPlaylist) => (
            <CarouselItem
              key={item.id}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-[17%]"
            >
              <PlaylistCard playlist={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 flex gap-4 mt-4">
          <CarouselPrevious className="cursor-pointer" />
          <CarouselNext className="cursor-pointer" />
        </div>
      </Carousel>
    </div>
  );
};

export default PlaylistsRow;
