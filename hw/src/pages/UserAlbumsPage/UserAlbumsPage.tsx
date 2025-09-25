import { useParams, Link } from 'react-router-dom';
import { useGetAlbumsByUserIdQuery } from '../../entities/album/api/albumsApi';
import { useGetUserByIdQuery } from '../../entities/user/api/usersApi';
import { ItemList } from '../../shared/ui/ItemList/ItemList';
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
      <ItemList
        items={userAlbums}
        keyExtractor={(album) => album.id}
        emptyText="У этого пользователя пока нет альбомов"
        listClassName={styles['albums-grid']}
        wrapItem={false}
        renderItem={(album) => (
          <Link 
            to={`/albums/${album.id}/photos`}
            className={styles['album-card']}
          >
            <h3 className={styles['album-title']}>{album.title}</h3>
            <p className={styles['album-info']}>Альбом #{album.id}</p>
          </Link>
        )}
      />
    </div>
  );
};
