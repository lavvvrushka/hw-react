import styles from './PostCard.module.css'
import { type Post } from '../../../lib/mocks/posts'

type Props = {
  post: Post
}

function PostCard({ post }: Props) {
  return (
    <article className={styles['post-card']}>
      <h2 className={styles['post-title']}>{post.title}</h2>
      <p className={styles['post-text']}>{post.text}</p>
      <p className={styles['post-author']}>Автор: {post.author}</p>
    </article>
  )
}

export { PostCard }  