import axios from 'axios';
import type { IAllSongs } from '@/api/data-types/songs-data-types';
import { errorCatch } from '@/api/api-helper';

export const SongService = async () => {
  try {
    const response = await axios.get<IAllSongs>(
      import.meta.env.VITE_API_URL + '/songs'
    );
    return response;
  } catch (error: any) {
    throw new Error(errorCatch(error));
  }
};