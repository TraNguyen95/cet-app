import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { createSearchParams, Link } from 'react-router-dom'
import useQueryConfig from 'src/hooks/useQueryConfig'
import postApi from '../../apis/post.api'
import useQueryParams from '../../hooks/useQueryParams'
import classNames from 'classnames'
import './index.css'

export default function PostsList() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [disabled, setDisabled] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const queryConfig = useQueryConfig()
  const navigate = useNavigate()

  const queryParams = useQueryParams()
  const fetchData = async () => {
    const response = await postApi.getPosts({
      pagination: {
        page: page || '1',
        pageSize: queryParams.pageSize || '3'
      },
      filters: {
        categories: queryParams.category
      }
    })
    const newData = response.data.data
    console.log(response.data.meta)
    setDisabled(false)
    if (
      response.data.meta.pagination.page === response.data.meta.pagination.pageCount ||
      !response.data.meta.pagination.pageCount
    ) {
      setDisabled(true)
    }
    setData([...data, ...newData])
  }

  useEffect(() => {
    console.log('useEffect')
    fetchData()
  }, [page, queryParams.category])

  const categories = [
    { id: 1, name: 'category 1' },
    { id: 2, name: 'category 2' },
    { id: 3, name: 'category 3' },
    { id: 4, name: 'category 4' }
  ]
  const handleSortCategory = (id) => {
    console.log('sort')
    setPage(1)
    setSelectedCategory(id)
    setData([])
    navigate({
      pathname: '/posts',
      search: createSearchParams([['category', id.toString()]]).toString()
    })
  }

  const handleSearchAll = () => {
    setData([])
    setPage(1)
    setSelectedCategory(null)
    navigate({
      pathname: '/posts'
    })
  }

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }
  const mainBackgroundClasses = `bg-mainBackground bg-[url("/images/Vector14.png")] bg-contain bg-left-top bg-no-repeat py-6 min-h-screen`

  const location = useLocation()

  const isCategoryActive = (categoryId) => {
    const searchParams = new URLSearchParams(location.search)
    const categoryParam = searchParams.get('category')
    if (categoryParam === null && categoryId === null) {
      return true // Thêm lớp active nếu không có tham số tìm kiếm và categoryId là null (All)
    }
    return categoryParam === categoryId?.toString()
  }

  return (
    <div className={mainBackgroundClasses}>
      <div className='container text-white'>
        <h3 className='mb-10 text-center text-5xl'>Our News</h3>
        <div className='flex justify-center gap-10 pb-10 max-sm:justify-start' style={{ overflowX: 'auto' }}>
          <button
            className={classNames({ 'text-blue': isCategoryActive(null), active: selectedCategory === null })}
            onClick={handleSearchAll}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              className={classNames('whitespace-nowrap', {
                'active text-blue': isCategoryActive(category.id),
                active: selectedCategory === category.id
              })}
              onClick={() => handleSortCategory(category.id)}
              key={category.id}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className='container mx-auto min-h-[300px]'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
            {data.map((post) => (
              <Link
                to={post.id.toString()}
                className='border-white-50 hover:scale-102 transform border-2 hover:-translate-y-1'
                key={post.id}
              >
                <div layoutId={post.id.toString()} className='mb-2'>
                  <img className='h-72 w-full object-cover' src={post.thumbnail} alt='Thumbnail' />
                </div>
                <div className='mt-3 mb-2 text-blue'>アプリ開発</div>
                <h3 className='text-xl font-bold'>{post.attributes.title}</h3>
                <div className='text-sm text-white text-opacity-50'>2023.01.23</div>
              </Link>
            ))}
          </div>
        </div>
        <div className='width-full mt-5 flex'>
          {!disabled && (
            <button
              onClick={handleLoadMore}
              className={classNames(
                'mx-auto transform rounded-[100px] border-r border-none bg-[#36AAFA] px-6 py-3 text-base hover:-translate-y-1 hover:scale-105',
                { 'pointer-events-none': disabled }
              )}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
