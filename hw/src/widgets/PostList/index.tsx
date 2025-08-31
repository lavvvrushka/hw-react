import PostCard from '../../entities/post/ui/PostCard'

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
    <div>
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  )
}

export default PostList