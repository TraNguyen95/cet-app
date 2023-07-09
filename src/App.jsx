import { Link, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PostsList from './pages/PostsList/Postlists'

function App() {
  return (
    <>
      <Link to='/posts'>posts</Link>
      <Routes>
        <Route path='/' element={<>Home</>} />
        <Route path='/posts' element={<PostsList />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
