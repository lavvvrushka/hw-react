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
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default PostList