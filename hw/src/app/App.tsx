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
  { id: 1, title: 'Мой первый пост', text: 'Это мой первый пост в React приложении! Я изучаю передачу данных через props.', author: 'Студент' },
  { id: 2, title: 'Изучаю TypeScript', text: 'TypeScript помогает писать более надежный код с типизацией.', author: 'Разработчик' },
  { id: 3, title: 'Компонентный подход', text: 'React использует компонентный подход для создания пользовательских интерфейсов.', author: 'Программист' },
]

function App() {
  return (
    <MainLayout>
      <div className="app-container">
        <h1 className="app-title">Список постов</h1>
        <PostList posts={posts} />
      </div>
    </MainLayout>
  )
}

export default App
