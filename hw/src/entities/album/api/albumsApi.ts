import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Album {
  id: number;
  userId: number;
  title: string;
}

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Album'],
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => 'albums',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Album' as const, id })),
              { type: 'Album', id: 'LIST' },
            ]
          : [{ type: 'Album', id: 'LIST' }],
    }),
    getAlbumsByUserId: builder.query<Album[], number>({
      query: (userId) => `albums?userId=${userId}`,
      providesTags: (result, _error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Album' as const, id })),
              { type: 'Album', id: `USER_${userId}` },
            ]
          : [{ type: 'Album', id: `USER_${userId}` }],
    }),
    getAlbumById: builder.query<Album, number>({
      query: (id) => `albums/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Album', id }],
    }),
    createAlbum: builder.mutation<Album, Partial<Album>>({
      query: (newAlbum) => ({
        url: 'albums',
        method: 'POST',
        body: newAlbum,
      }),
      invalidatesTags: [{ type: 'Album', id: 'LIST' }],
    }),
    updateAlbum: builder.mutation<Album, { id: number; album: Partial<Album> }>({
      query: ({ id, album }) => ({
        url: `albums/${id}`,
        method: 'PUT',
        body: album,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Album', id }],
    }),
    deleteAlbum: builder.mutation<void, number>({
      query: (id) => ({
        url: `albums/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Album', id }],
    }),
  }),
});

export const {
  useGetAlbumsQuery,
  useGetAlbumsByUserIdQuery,
  useGetAlbumByIdQuery,
  useCreateAlbumMutation,
  useUpdateAlbumMutation,
  useDeleteAlbumMutation,
} = albumsApi;
