import { PostCard } from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';
import type { Post } from '../../entities/post/model/types/post';

interface PostListProps {
  posts: Post[];
}

function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return <div>Нет постов для отображения</div>;
  }

  return (
    <div className={styles['post-list']}>
      <div className={styles['post-container']}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export { PostList };
export type { PostListProps };
