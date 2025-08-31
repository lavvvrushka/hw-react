import './PostCard.css'

type Post = {
  id: number
  title: string
  text: string
  author?: string
}

type Props = {
  post: Post
}

function PostCard({ post }: Props) {
  return (
    <article className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-text">{post.text}</p>
      <p className="post-author">Автор: {post.author}</p>
    </article>
  )
}

export default PostCard