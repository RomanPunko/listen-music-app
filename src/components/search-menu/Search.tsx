import { type FC, useEffect, useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';
import { getSongs } from '@/store/slices/songs-data-slice';
import { getFavoriteSongs, toggleFavoriteSong } from '@/store/slices/favorites-songs-slice';
import { play, pause } from '@/store/slices/audio-slice';
import type { ISong } from '@/api/data-types/songs-data-types';
import SearchItem from './SearchItem';

const Search: FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [loadingLike, setLoadingLike] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const songs = useAppSelector((state) => state.songs.songs);
  const favoriteIds = useAppSelector((state) => state.favorites.favoriteIds);
  const currentSong = useAppSelector((state) => state.audio.currentSong);
  const isPlaying = useAppSelector((state) => state.audio.isPlaying);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchInput.length >= 3) {
      dispatch(getSongs());
      dispatch(getFavoriteSongs());
    }
  }, [dispatch, searchInput.length]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredSongs = songs.filter(
    (song) =>
      song.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handlePlayPause = (song: ISong) => {
    if (currentSong?.id === song?.id && isPlaying) {
      dispatch(pause());
    } else {
      dispatch(play({ song: song, songsList: filteredSongs }));
    }
  };

  const handleLike = (song: ISong) => async (event: React.MouseEvent) => {
    event.stopPropagation();
    setLoadingLike(song.id);
    try {
      await dispatch(toggleFavoriteSong(song.id));
      await dispatch(getFavoriteSongs());
    } catch (error) {
      console.error('Toggle favorite error:', error);
    } finally {
      setLoadingLike(null);
    }
  };

  return (
    <div ref={containerRef} className="relative w-[400px]">
      <Input
        onFocus={() => setIsFocused(true)}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="rounded-4xl bg-white/10 border-0 focus-visible:ring-1 pl-8 text-white placeholder:text-gray-400"
        placeholder="What do you want to play? (3 letters or more)"
      />

      {isFocused && searchInput.length >= 3 && (
        <div className="absolute top-full mt-2 w-full rounded-xl bg-secondary text-white p-3 flex flex-col gap-2 max-h-64 overflow-y-auto shadow-lg z-50">
          {filteredSongs.length === 0 ? (
            <p className="text-center w-full text-gray-400">No songs found</p>
          ) : (
            filteredSongs.map((song) => (
              <SearchItem
                key={song.id}
                song={song}
                onPlayPause={() => handlePlayPause(song)}
                onLike={handleLike(song)}
                isLiked={favoriteIds.includes(song.id)}
                loadingLike={loadingLike === song.id}
                isCurrent={currentSong?.id === song.id}
                isPlaying={isPlaying}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
