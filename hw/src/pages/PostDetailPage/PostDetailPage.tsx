import { useParams, Link } from 'react-router-dom';
import { PostCard } from '../../entities/post/ui/PostCard';
import styles from './PostDetailPage.module.css';
import { useGetPostByIdQuery } from '../../entities/post/api/postsApi';

export const PostDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading, isError } = useGetPostByIdQuery(Number(id));

  if (isLoading) return <div>Загрузка поста...</div>;
  if (isError || !post) {
    return (
      <div>
        <h1>Ошибка загрузки поста</h1>
        <Link to="/posts" className={styles.backLink}>
          Вернуться к постам
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/posts" className={styles.backLink}>
        Вернуться к постам
      </Link>
      <h1>Детали поста</h1>
      <PostCard post={post} />
    </div>
  );
};
