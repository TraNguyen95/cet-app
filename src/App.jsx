import { Link, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PostsList from './pages/PostsList/Postlists'
import PostDetail from './pages/PostDetail'
import HomePage from './pages/HomePage'
import { motion } from 'framer-motion'
import Contact from './pages/Contact'

const AnimationWrap = ({ children }) => (
  <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
    {children}
  </motion.div>
)

function App() {
  return (
    <>
      {/* <div className='w-full bg-mainBackground py-4 pl-4'>
        <Link to='/'>
          <img className='h-[40px] w-[40px]' src='/images/Logo.png' alt='' />
        </Link>
      </div> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/posts'
          element={
            <AnimationWrap>
              <PostsList />
            </AnimationWrap>
          }
        />
        <Route
          path='/posts/:id'
          element={
            <AnimationWrap>
              <PostDetail />
            </AnimationWrap>
          }
        />
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
