import styles from './PostCard.module.css'
import { type Post } from '../../../lib/mocks/posts'

type Props = {
  post: Post
}

function PostCard({ post }: Props) {
  return (
    <article className={styles.postCard}>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <p className={styles.postText}>{post.text}</p>
      <p className={styles.postAuthor}>Автор: {post.author}</p>
    </article>
  )
}

export { PostCard }