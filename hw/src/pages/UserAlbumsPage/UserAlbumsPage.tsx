import { useParams, Link } from 'react-router-dom';
import { useGetAlbumsByUserIdQuery } from '../../entities/album/api/albumsApi';
import { useGetUserByIdQuery } from '../../entities/user/api/usersApi';
import styles from './UserAlbumsPage.module.css';

export const UserAlbumsPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  
  const { 
    data: userAlbums = [], 
    isLoading: isLoadingAlbums, 
    isError: isAlbumsError 
  } = useGetAlbumsByUserIdQuery(userId);
  
  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isUserError
  } = useGetUserByIdQuery(userId);
  
  const isLoading = isLoadingAlbums || isLoadingUser;
  const isError = isAlbumsError || isUserError;

  if (isLoading) {
    return <div>Загрузка данных...</div>;
  }

  if (isError) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <div className={styles['albums-container']}>
      <h1>Альбомы пользователя {user?.name || 'Загрузка...'}</h1>
      
      {userAlbums.length > 0 ? (
        <div className={styles['albums-grid']}>
          {userAlbums.map(album => (
            <Link 
              key={album.id} 
              to={`/albums/${album.id}/photos`}
              className={styles['album-card']}
            >
              <h3 className={styles['album-title']}>{album.title}</h3>
              <p className={styles['album-info']}>Альбом #{album.id}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p>У этого пользователя пока нет альбомов</p>
      )}
    </div>
  );
};
