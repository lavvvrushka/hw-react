import { useParams, Link } from 'react-router-dom';
import { PostCard } from '../../entities/post/ui/PostCard';
import styles from './PostDetailPage.module.css';
import { useGetPostByIdQuery } from '../../entities/post/api/postsApi';
import { useGetCommentsByPostIdQuery } from '../../entities/comment/api/commentsApi';

export const PostDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const { data: post, isLoading, isError } = useGetPostByIdQuery(postId);
  const { data: comments = [], isLoading: isCommentsLoading, isError: isCommentsError } = useGetCommentsByPostIdQuery(postId);

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
      {isCommentsLoading && <div>Загрузка комментариев...</div>}
      {isCommentsError && <div>Ошибка загрузки комментариев</div>}
      <PostCard post={post} comments={comments} />
    </div>
  );
};
