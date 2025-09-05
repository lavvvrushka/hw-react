import React from 'react'
import { PostCard } from '../../entities/post/ui/PostCard'
import { type Post } from '../../lib/mocks/posts'
import styles from './PostList.module.css'

type Props = {
  posts: Post[]
}

function PostList({ posts }: Props) {
  return (
    <div className={styles['post-list']}>
      <h2 className={styles['post-list-title']}>Весь список</h2>
      <div className={styles['post-container']}>
        {posts.map((post) => (
          <React.Fragment key={post.id}>
            <PostCard post={post} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export { PostList }