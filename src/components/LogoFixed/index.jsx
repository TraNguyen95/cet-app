import { Link } from 'react-router-dom'

export default function LogoFixed() {
  return (
    <div className='fixed w-full bg-mainBackground bg-transparent py-4 pl-4'>
      <Link to='/'>
        <img className='h-[40px] w-[40px]' src='/images/Logo.png' alt='' />
      </Link>
    </div>
  )
}
