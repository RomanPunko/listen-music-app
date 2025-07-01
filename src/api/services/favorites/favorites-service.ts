import { getAccessToken } from '../auth/auth-helper';
import axios from 'axios';
import type { IFavSong } from '@/api/data-types/songs-data-types';

export const toggleFavoriteSongService = async (songId: string) => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_API_URL + '/favorites/toggle',
      { songId },
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error toggling favorite:', error);
  }
};

export const getFavoriteSongsService = async () => {
  const response = await axios.get(import.meta.env.VITE_API_URL + '/favorites', {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
  return response.data.map((item: IFavSong) => item.song);
};
