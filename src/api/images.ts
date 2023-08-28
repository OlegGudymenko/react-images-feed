import { createClient } from 'pexels';

const client = createClient(process.env.REACT_APP_API_KEY || '');

export const getAllImages = (page: number, pageSize: number) => {
  return client.photos.curated({ 
    page,
    per_page: pageSize,
  });
}

export const getImageById = (id: string) => {
  return client.photos.show({ id })
}