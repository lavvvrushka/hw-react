import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const photosApi = createApi({
  reducerPath: 'photosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Photo'],
  endpoints: (builder) => ({
    getPhotos: builder.query<Photo[], void>({
      query: () => 'photos',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Photo' as const, id })),
              { type: 'Photo', id: 'LIST' },
            ]
          : [{ type: 'Photo', id: 'LIST' }],
    }),
    getPhotosByAlbumId: builder.query<Photo[], number>({
      query: (albumId) => `photos?albumId=${albumId}`,
      providesTags: (result, _error, albumId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Photo' as const, id })),
              { type: 'Photo', id: `ALBUM_${albumId}` },
            ]
          : [{ type: 'Photo', id: `ALBUM_${albumId}` }],
    }),
    getPhotoById: builder.query<Photo, number>({
      query: (id) => `photos/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Photo', id }],
    }),
  }),
});

export const {
  useGetPhotosQuery,
  useGetPhotosByAlbumIdQuery,
  useGetPhotoByIdQuery,
} = photosApi;
