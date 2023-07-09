import 'react-toastify/dist/ReactToastify.css'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { HomePage } from './page/HomePage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: 'about',
      element: <div>About</div>
    }
  ])
  return <RouterProvider router={router} />
}

export default App
