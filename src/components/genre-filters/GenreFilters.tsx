import { type FC } from 'react';
import GenreFiltersItem from './GenreFilterItem';

const GenreFilters: FC = () => {


  return (
    <div className='flex gap-3 mb-2'>
      <GenreFiltersItem genre={"Rock"} />
      <GenreFiltersItem genre={"Pop"} />
      <GenreFiltersItem genre={"Rap"} />
      <GenreFiltersItem genre={"Hip-Hop"} />
      <GenreFiltersItem genre={"Jazz"} />
      <GenreFiltersItem genre={"Classical"} />
      <GenreFiltersItem genre={"Country"} />
    </div>
  );
};

export default GenreFilters;