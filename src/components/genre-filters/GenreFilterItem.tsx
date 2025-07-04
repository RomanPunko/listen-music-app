import { type FC } from 'react';
import { Button } from '../ui/button';

interface IGenreItemProps {
  genre: string;
  active: boolean;
  onClick: () => void;
}

const GenreFiltersItem: FC<IGenreItemProps> = ({ genre, active, onClick }) => (
  <Button
    onClick={onClick}
    className={
      active
        ? 'bg-white/40 rounded-xl cursor-pointer hover:bg-white/50 h-7 pr-3 pl-3 select-none'
        : 'bg-white/10 rounded-xl cursor-pointer hover:bg-white/10 h-7 pr-3 pl-3 select-none'
    }
  >
    {genre}
  </Button>
);

export default GenreFiltersItem;