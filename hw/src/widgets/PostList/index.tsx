import React from 'react'
import PostCard from '../../entities/post/ui/PostCard'
import './PostList.css'

type Post = {
  id: number
  title: string
  text: string
  author?: string
}

type Props = {
  posts: Post[]
}

function PostList({ posts }: Props) {
  return (
    <div className="post-list">
      <h2 className="post-list-title">Весь список</h2>
      <div className="post-container">
        {posts.map((post) => (
          <React.Fragment key={post.id}>
            <PostCard post={post} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default PostList