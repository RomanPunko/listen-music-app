import axios from 'axios';
import type { IAllPlaylists } from '@/api/data-types/playlist-data-types';
import { errorCatch } from '@/api/api-helper';

export const PlaylistService = async () => {
  try {
    const response = await axios.get<IAllPlaylists>(
      import.meta.env.VITE_API_URL + '/playlists'
    );
    console.log(response)
    return response;
  } catch (error: any) {
    throw new Error(errorCatch(error));
  }
};
PlaylistService()