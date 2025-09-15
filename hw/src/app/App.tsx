import { UserProvider } from './providers/user/UserContext'
import { AppRouter } from './providers/router/AppRouter'
import './App.css'

function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  )
}

export default App
