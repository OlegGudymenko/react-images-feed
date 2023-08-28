import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { PhotosWithTotalResults } from 'pexels';
import TablePagination from '@mui/material/TablePagination';

import ImageCard from '../components/ImageCard';

import { getAllImages } from '../api/images';

const PAGE_SIZE = 10;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);

  const { isLoading, data, refetch } = useQuery({
    queryKey: ['images'],
    queryFn: () =>  getAllImages(currentPage, pageSize) as Promise<PhotosWithTotalResults>,
  })

  useEffect(() => {
    refetch()
    window.scrollTo(0, 0)
  }, [currentPage,pageSize, refetch])

  const totalCount = (data?.total_results || 0) / PAGE_SIZE;

  return (
    <div className='min-h-screen w-full px-10'>
      <div className='flex justify-center'>
      {isLoading && '...loading'}
      <div className='grid grid-cols-3 gap-8'>
        {data?.photos.map((item) => (
          <ImageCard key={item.id} {...item}/>
        ))}
      </div>
      </div>

      <div className='flex justify-center h-10 mt-6'>
        <TablePagination
          component="div"
          count={totalCount}
          page={currentPage}
          onPageChange={(_event, page:number) => setCurrentPage(page)}
          rowsPerPage={pageSize}
          onRowsPerPageChange={(event) => {
            setPageSize(+event.target.value as number)
          }}
        />
     </div>
    </div>
  )
};

export default Home;