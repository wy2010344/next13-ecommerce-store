import type { FC } from 'react';

interface NoResultsProps { }

const NoResults: FC<NoResultsProps> = () => {
  return (<div className='flex items-center justify-center h-full w-full text-neutral-500'>
    No results Found
  </div>);
}

export default NoResults;
