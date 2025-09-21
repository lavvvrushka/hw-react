import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';
import { CommentList } from '../../../widgets/CommentList/ui/CommentList';
import { useGetCommentsByPostIdQuery } from '../../comment/api/commentsApi';
import type { Post } from '../model/types/post';

function PostCard({ post }: { post: Post }) {
  const { data: comments = [], isLoading, isError } = useGetCommentsByPostIdQuery(post.id);

  if (isLoading) return <div>Загрузка комментариев...</div>;
  if (isError) return <div>Ошибка загрузки комментариев</div>;

  return (
    <article className={styles['post-card']}>
      <Link to={`/posts/${post.id}`} className={styles['post-link']}>
        <h2 className={styles['post-title']}>{post.title}</h2>
      </Link>
      <p className={styles['post-text']}>{post.body}</p>
      <p className={styles['post-author']}>Автор ID: {post.userId}</p>
      <CommentList comments={comments} />
    </article>
  )
}

export { PostCard }