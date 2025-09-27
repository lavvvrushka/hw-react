import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Comment'],
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], void>({
      query: () => 'comments',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Comment' as const, id })),
              { type: 'Comment', id: 'LIST' },
            ]
          : [{ type: 'Comment', id: 'LIST' }],
    }),
    getCommentsByPostId: builder.query<Comment[], number>({
      query: (postId) => `comments?postId=${postId}`,
      providesTags: (result, _error, postId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Comment' as const, id })),
              { type: 'Comment', id: `POST_${postId}` },
            ]
          : [{ type: 'Comment', id: `POST_${postId}` }],
    }),
    getCommentById: builder.query<Comment, number>({
      query: (id) => `comments/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Comment', id }],
    }),
    createComment: builder.mutation<Comment, Partial<Comment>>({
      query: (newComment) => ({
        url: 'comments',
        method: 'POST',
        body: newComment,
      }),
      invalidatesTags: (_result, _error, { postId }) => [
        { type: 'Comment', id: 'LIST' },
        { type: 'Comment', id: `POST_${postId}` },
      ],
    }),
    updateComment: builder.mutation<Comment, { id: number; comment: Partial<Comment> }>({
      query: ({ id, comment }) => ({
        url: `comments/${id}`,
        method: 'PUT',
        body: comment,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Comment', id }],
    }),
    deleteComment: builder.mutation<void, number>({
      query: (id) => ({
        url: `comments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Comment', id }],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetCommentsByPostIdQuery,
  useGetCommentByIdQuery,
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentsApi;
