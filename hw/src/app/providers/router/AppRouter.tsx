import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../../../shared/layouts/MainLayout';
import { PostsPage } from '../../../pages/PostsPage/PostsPage';
import { PostDetailPage } from '../../../pages/PostDetailPage/PostDetailPage';
import { UserAlbumsPage } from '../../../pages/UserAlbumsPage/UserAlbumsPage';
import { AlbumPhotosPage } from '../../../pages/AlbumPhotosPage/AlbumPhotosPage';
import { UserTodosPage } from '../../../pages/UserTodosPage/UserTodosPage';
import { UserPostsPage } from '../../../pages/UserPostsPage/UserPostsPage';
import { UserLayout } from '../../../pages/UserLayout/UserLayout';
import { AlbumLayout } from '../../../pages/AlbumLayout/AlbumLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <PostsPage />
      },
      {
        path: 'posts',
        element: <PostsPage />
      },
      {
        path: 'posts/:id',
        element: <PostDetailPage />
      },
      {
        path: 'users/:id',
        element: <UserLayout />,
        children: [
          {
            path: 'posts',
            element: <UserPostsPage />
          },
          {
            path: 'albums',
            element: <UserAlbumsPage />
          },
          {
            path: 'todos',
            element: <UserTodosPage />
          }
        ]
      },
      {
        path: 'albums/:id',
        element: <AlbumLayout />,
        children: [
          {
            path: 'photos',
            element: <AlbumPhotosPage />
          }
        ]
      }
    ]
  }
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
