import { Outlet, useParams, Link } from 'react-router-dom';
import { useGetAlbumByIdQuery } from '../../entities/album/api/albumsApi';
import { useGetUserByIdQuery } from '../../entities/user/api/usersApi';
import styles from './AlbumLayout.module.css';

export const AlbumLayout = () => {
  const { id } = useParams<{ id: string }>();
  const albumId = Number(id);

  const { data: album, isLoading: isLoadingAlbum, isError: isAlbumError } =
    useGetAlbumByIdQuery(albumId);

  const { data: user, isLoading: isLoadingUser, isError: isUserError } =
    useGetUserByIdQuery(album?.userId ?? 0, { skip: !album });

  if (isLoadingAlbum || isLoadingUser) {
    return <div className={styles.loading}>Загрузка данных альбома...</div>;
  }

  if (isAlbumError || isUserError || !album || !user) {
    return <div className={styles.error}>Альбом не найден</div>;
  }

  return (
    <div className={styles.albumLayout}>
      <div className={styles.header}>
        <h2 className={styles.title}>Альбом: {album.title}</h2>
        <p className={styles.author}>Автор: {user.name}</p>
        <nav className={styles.nav}>
          <Link 
            to={`/users/${user.id}/albums`} 
            className={styles.navLink}
          >
            ← Все альбомы пользователя
          </Link>
          <Link 
            to={`/albums/${id}/photos`} 
            className={styles.navLink}
          >
            Фотографии
          </Link>
        </nav>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
