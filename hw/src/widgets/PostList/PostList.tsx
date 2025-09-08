import PostCard from '../../entities/post/ui/PostCard'
import { type Post } from '../../lib/mocks/posts'
import styles from './PostList.module.css'

type Props = {
  posts: Post[]
}

function PostList({ posts }: Props) {
  return (
    <div className={styles.postList}>
      <h2 className={styles.postListTitle}>Весь список</h2>
      <div className={styles.postContainer}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default PostList