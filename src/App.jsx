import { Link, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PostsList from './pages/PostsList/Postlists'
import PostDetail from './pages/PostDetail'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <div className='w-full bg-mainBackground py-4 pl-4'>
        <Link to='/'>
          <img className='h-[40px] w-[40px]' src='/images/Logo.png' alt='' />
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<>Home</>} />
        <Route path='/posts' element={<PostsList />} />
        <Route path='/posts/:id' element={<PostDetail />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
