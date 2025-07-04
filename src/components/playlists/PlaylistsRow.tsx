import { type FC } from 'react';
import PlaylistCard from './PlaylistCard';
import { type IAllPlaylists, type IPlaylist } from '@/api/data-types/playlist-data-types';
import { getPlaylistByGenres } from '@/components/genre-filters/GenreFilters';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useAppSelector } from '@/hooks/app-hooks';

interface IPlaylistsRowProps {
  playlists: IAllPlaylists | [];
  category: string;
}

const PlaylistsRow: FC<IPlaylistsRowProps> = ({ playlists, category }) => {
  const currentGenre = useAppSelector((state) => state.genre.currentGenre);

  const filteredPlaylists = getPlaylistByGenres(playlists, currentGenre);

  if(filteredPlaylists.length === 0){
    return (
      <div className="flex flex-col gap-2 mb-4">
        <p className="uppercase font-bold w-fit flex justify-center">{category}</p>
        <p className='text-center'>No playlists available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 mb-4">
      <p className="uppercase font-bold w-fit">{category}</p>
      <Carousel className="w-full relative">
        <CarouselContent className="gap-4">
          {filteredPlaylists?.map((item: IPlaylist) => (
            <CarouselItem
              key={item.id}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-[17%]"
            >
              <PlaylistCard playlist={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-0 mt-[-24px] right-12">
          <CarouselPrevious className="cursor-pointer" />
          <CarouselNext className="cursor-pointer" />
        </div>
      </Carousel>
    </div>
  );
};

export default PlaylistsRow;
