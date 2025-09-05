import MainLayout from '../shared/layouts/MainLayout'
import PostList from '../widgets/PostList/PostList'
import { posts } from '../lib/mocks/posts'
import './App.css'

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
