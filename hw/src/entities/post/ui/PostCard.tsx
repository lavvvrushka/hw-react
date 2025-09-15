import styles from './PostCard.module.css'
import { type Post } from '../../../lib/mocks/posts'
import { CommentList } from '../../../widgets/CommentList/ui/CommentList'
import { comments } from '../../../lib/mocks/comments'

function PostCard({ post }: { post: Post }) {
  const postComments = comments.filter(c => c.postId === post.id)

  return (
    <article className={styles['post-card']}>
      <h2 className={styles['post-title']}>{post.title}</h2>
      <p className={styles['post-text']}>{post.text}</p>
      <p className={styles['post-author']}>Автор: {post.author}</p>
      <CommentList comments={postComments} />
    </article>
  )
}

export { PostCard }  