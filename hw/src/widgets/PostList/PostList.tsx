import { PostCard } from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';
import type { Post } from '../../entities/post/model/types/post';
import { useGetCommentsQuery, type Comment } from '../../entities/comment/api/commentsApi';

interface PostListProps {
  posts: Post[];
}

function PostList({ posts }: PostListProps) {
  const { data: allComments = [], isLoading, isError } = useGetCommentsQuery();

  if (posts.length === 0) {
    return <div>Нет постов для отображения</div>;
  }

  const commentsByPostId = allComments.reduce<Record<number, Comment[]>>((acc, c) => {
    (acc[c.postId] ||= []).push(c);
    return acc;
  }, {});

  return (
    <div className={styles['post-list']}>
      <div className={styles['post-container']}>
        {isLoading && <div>Загрузка комментариев...</div>}
        {isError && <div>Ошибка загрузки комментариев</div>}
        {posts.map((post) => (
          <PostCard key={post.id} post={post} comments={commentsByPostId[post.id] || []} />
        ))}
      </div>
    </div>
  );
}

export { PostList };
export type { PostListProps };
