import { Link, useNavigate } from "react-router-dom";
import { Photo } from 'pexels';

const ImageCard = ({
  id,
  src,
  alt,
  photographer_url,
  photographer
}: Photo) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/photo/${id}`)}
      className='flex flex-col shadow-md w-80 overflow-hidden rounded-md mt-6 cursor-pointer'>
      <img src={src.portrait} alt={alt || ''}/>
      <h3 className='px-4 py-6'>Author: 
        <Link 
          target='_blank'
          className='ml-2 text-blue-500 underline hover:no-underline'
          to={photographer_url}> 
          {photographer}
        </Link>
      </h3>
    </div>
  )
}

export default ImageCard;