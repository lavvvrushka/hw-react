import { useState } from 'react'
import { MainLayout } from '../shared/layouts/MainLayout'
import { posts as allPosts } from '../lib/mocks/posts'
import { PostLengthFilter } from '../features/PostLengthFilter/ui/PostLengthFilter'
import { filterByLength } from '../features/PostLengthFilter/lib/filterByLength'
import { PostListWithLoading } from '../widgets/PostListWithLoading/PostListWithLoading'
import { Button } from '../shared/ui/Button/Button'
import './App.css'

function App() {
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
        <PostLengthFilter value={minLength} onChange={setMinLength} />
        <Button onClick={handleSearch}>
          Поиск
        </Button>
        <PostListWithLoading posts={filteredPosts} loading={loading} />
      </div>
    </MainLayout>
  )
}

export default App
