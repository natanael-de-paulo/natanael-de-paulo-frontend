import { BrowserRouter } from 'react-router-dom'
import { RouterList } from './routes'
import { AuthProvider } from './contexts/useAuth'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <RouterList />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App

