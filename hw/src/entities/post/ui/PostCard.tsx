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
    <article>
      <h2>{post.title}</h2>
      <p>{post.text}</p>
      <p>Автор: {post.author}</p>
    </article>
  )
}

export default PostCard