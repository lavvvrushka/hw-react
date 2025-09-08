import MainLayout from '../shared/layouts/MainLayout'
import PostList from '../widgets/PostList/PostList'
import { posts } from '../lib/mocks/posts'
import styles from './App.module.css'

function App() {
  return (
    <MainLayout>
      <div className={styles.appContainer}>
        <h1 className={styles.appTitle}>Список постов</h1>
        <PostList posts={posts} />
      </div>
    </MainLayout>
  )
}

export default App
