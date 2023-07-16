import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
export default function LogoFixed({ fixed }) {
  return (
    <div className={classNames({ fixed: fixed }, 'top-0 h-[110px] w-full bg-transparent py-4 pl-4')}>
      <Link to='/'>
        <img className='h-[40px] w-[40px]' src={Logo} alt='' />
      </Link>
    </div>
  )
}
