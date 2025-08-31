import MainLayout from '../shared/layouts/MainLayout'
import PostList from '../widgets/PostList'
import './App.css'

type Post = {
  id: number
  title: string
  text: string
  author?: string
}

const posts: Post[] = [
  { id: 1, title: 'Пост 1', text: 'Здесь текст', author: 'Автор 1' },
  { id: 2, title: 'Пост 2', text: 'Тут текст', author: 'Автор 2' },
  { id: 3, title: 'Пост 3', text: 'Там текст', author: 'Автор 3' },
]

function App() {
  return (
     <MainLayout>
      <h1>Список постов</h1>
      <PostList posts={posts} />
    </MainLayout>
  )
}

export default App
