import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { Photo } from 'pexels';

import { getImageById } from '../api/images';

const Details = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data } = useQuery({
    queryKey: ['image'],
    queryFn: () => getImageById(id || '') as Promise<Photo>,
  })

  const renderDetails = () => {
    if(!data) return null
    return (
      <div className='flex justify-center'>
        <img src={data.src.large} alt={data.alt || ''}/>
      </div>
    )
  }

  return (
    <div className='min-h-screen w-full px-10'>
      {isLoading && '...loading'}
      {renderDetails()}
    </div>
  )
};

export default Details;