import { useParams, Link } from 'react-router-dom';
import { albums } from '../../lib/mocks/albums';
import styles from './UserAlbumsPage.module.css';

export const UserAlbumsPage = () => {
  const { id } = useParams<{ id: string }>();
  const userAlbums = albums.filter(album => album.userId === Number(id));

  return (
    <div className={styles['albums-container']}>
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
