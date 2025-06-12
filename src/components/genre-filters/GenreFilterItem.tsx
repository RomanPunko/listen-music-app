import { useState, type FC } from 'react';
import { Button } from '../ui/button';

interface IGenreItemProps {
  genre: string;
}

const GenreFiltersItem: FC<IGenreItemProps> = ({ genre }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(prev => !prev);
  };

  return (
    <Button
      onClick={handleClick}
      className={
        isActive
          ? 'bg-white/40 rounded-xl cursor-pointer hover:bg-white/50 h-7 pr-3 pl-3'
          : 'bg-white/10 rounded-xl cursor-pointer hover:bg-white/10 h-7 pr-3 pl-3'
      }
    >
      {genre}
    </Button>
  );
};

export default GenreFiltersItem;