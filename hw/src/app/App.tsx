import { useState } from 'react'
import { MainLayout } from '../shared/layouts/MainLayout'
import { PostList } from '../widgets/PostList/PostList'
import { Modal } from '../shared/ui/Modal/Modal'
import { posts as allPosts } from '../lib/mocks/posts'
import { PostLengthFilter } from '../features/PostLengthFilter/ui/PostLengthFilter'
import { filterByLength } from '../features/PostLengthFilter/lib/filterByLength'
import { withLoading } from '../shared/lib/hoc/withLoading'
import { Button } from '../shared/ui/Button/Button'
import './App.css'

const PostListWithLoading = withLoading(PostList)

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [minLength, setMinLength] = useState(0)
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState(0)

  const filteredPosts = filterByLength(allPosts, searchValue)

  const handleSearch = () => {
    setLoading(true)
    setTimeout(() => {
      setSearchValue(minLength)
      setLoading(false)
    }, 700)
  }

  return (
    <MainLayout>
      <div className="app-container">
        <h1 className="app-title">Список постов</h1>
        <div className="app-buttons">
          <Button onClick={() => setIsModalOpen(true)}>
            О проекте
          </Button>
        </div>
        <PostLengthFilter value={minLength} onChange={setMinLength} />
        <Button onClick={handleSearch}>
          Поиск
        </Button>
        <PostListWithLoading posts={filteredPosts} loading={loading} />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Modal.Header>О проекте</Modal.Header>
          <Modal.Body>
            <p>Приложение для обучения</p>
            <p>Реализованы:</p>
            <ul>
              <li>Список постов</li>
              <li>Переключение светлой и тёмной темы</li>
              <li>Модальное окно (compound components)</li>
              <li>Фильтр по длине заголовка</li>
              <li>HOC withLoading</li>
              <li>Комментарии с разворачиванием</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setIsModalOpen(false)}>Закрыть</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </MainLayout>
  )
}

export default App
