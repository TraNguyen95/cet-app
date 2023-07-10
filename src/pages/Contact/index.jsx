import classNames from 'classnames'
import { useState } from 'react'
import Iframe from 'react-iframe'
import contactApi from '../../apis/contact.api'
import LogoFixed from '../../components/LogoFixed'
const Input = ({ label, placeholder, id, handleChange, type = 'text' }) => {
  return (
    <div className='form-item'>
      <p className='w-full text-sm opacity-60'>{label}</p>
      <input
        onChange={handleChange}
        id={id}
        name={id}
        type={type}
        className='w-full rounded-sm border-b-[1px] border-[#434A5F] bg-transparent py-4 placeholder-[#434A5F] placeholder-opacity-100 outline-none focus:border-gray-500 focus:shadow-sm'
        placeholder={placeholder}
      />
    </div>
  )
}
const Arrow = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none'>
      <path
        d='M18.3295 4.91071C18.3292 4.91071 18.3289 4.91065 18.3285 4.91068L12.7357 4.9242C12.3167 4.92522 11.9778 5.26567 11.9788 5.68474C11.9798 6.10375 12.3202 6.44262 12.7392 6.44162L16.4943 6.43251L5.1328 17.794C4.8365 18.0903 4.8365 18.5706 5.1328 18.8669C5.4291 19.1632 5.90946 19.1632 6.20576 18.8669L17.5672 7.50549L17.5581 11.2605C17.5571 11.6795 17.896 12.0199 18.315 12.0209C18.7341 12.022 19.0745 11.683 19.0756 11.2641L19.0891 5.67116C19.0891 5.67084 19.089 5.67052 19.0891 5.67017C19.0895 5.25035 18.748 4.91025 18.3295 4.91071Z'
        fill='white'
      />
    </svg>
  )
}
const MapIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64' fill='none'>
      <g clipPath='url(#clip0_269_4671)'>
        <path
          d='M55.9564 58.8484C55.9564 56.0033 45.2305 53.6968 31.9993 53.6968C29.7982 53.6968 27.6672 53.7609 25.6426 53.8805L30.127 60.4778C30.2521 60.6619 30.3982 60.8195 30.5584 60.9522L33.5945 63.9884C46.0817 63.8118 55.9564 61.5783 55.9564 58.8484Z'
          fill='url(#paint0_linear_269_4671)'
        />
        <path
          d='M58.2579 26.2578C58.2579 11.756 46.502 0 32.0002 0C17.5616 0 5.88835 11.5505 5.74354 25.9885C5.63424 36.893 12.1732 46.2819 21.5548 50.3539C23.1247 51.0354 24.4676 52.1507 25.4297 53.5661L30.1278 60.4777C31.0262 61.7993 32.9739 61.7993 33.8723 60.4777L38.5703 53.5662C39.5294 52.1552 40.8652 51.0386 42.4307 50.3603C51.7429 46.3251 58.2579 37.053 58.2579 26.2578Z'
          fill='url(#paint1_linear_269_4671)'
        />
        <path
          d='M32.0001 60.1605C31.848 60.1605 31.4666 60.1197 31.2099 59.7422L26.5119 52.8305C25.4071 51.2051 23.8731 49.9337 22.0759 49.1537C12.8483 45.1485 6.95116 36.0607 7.05206 26.0016C7.11857 19.3661 9.73955 13.1542 14.4321 8.50998C19.1242 3.86621 25.364 1.30847 32.0001 1.30847H32.0003C45.7574 1.30847 56.9496 12.5008 56.9496 26.2579C56.9496 36.2114 51.0464 45.2009 41.9106 49.1598C40.1236 49.9342 38.5944 51.2035 37.4883 52.8307L32.7903 59.7424C32.5337 60.1197 32.1522 60.1605 32.0001 60.1605Z'
          fill='url(#paint2_linear_269_4671)'
        />
        <path
          d='M31.9996 42.7633C41.1153 42.7633 48.5051 35.3735 48.5051 26.2578C48.5051 17.1421 41.1153 9.75232 31.9996 9.75232C22.8839 9.75232 15.4941 17.1421 15.4941 26.2578C15.4941 35.3735 22.8839 42.7633 31.9996 42.7633Z'
          fill='url(#paint3_linear_269_4671)'
        />
        <path
          d='M57.4365 32.7954L41.755 17.1139C39.3155 14.5124 35.8479 12.8866 32.0001 12.8866C24.6154 12.8866 18.6289 18.8731 18.6289 26.2578C18.6289 30.1056 20.2548 33.5732 22.8562 36.0127L39.3827 52.5392C40.2319 51.6105 41.2678 50.8642 42.4309 50.3604C49.7958 47.1688 55.4102 40.7011 57.4365 32.7954Z'
          fill='url(#paint4_linear_269_4671)'
        />
        <path
          d='M32.0001 39.6291C39.3849 39.6291 45.3714 33.6426 45.3714 26.2578C45.3714 18.8731 39.3849 12.8866 32.0001 12.8866C24.6154 12.8866 18.6289 18.8731 18.6289 26.2578C18.6289 33.6426 24.6154 39.6291 32.0001 39.6291Z'
          fill='url(#paint5_linear_269_4671)'
        />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_269_4671'
          x1='44.4391'
          y1='61.2323'
          x2='36.5155'
          y2='51.1228'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFDA45' stopOpacity='0' />
          <stop offset='1' stopColor='#B53759' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_269_4671'
          x1='16.1523'
          y1='10.4092'
          x2='68.5444'
          y2='62.8012'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF7044' />
          <stop offset='1' stopColor='#F92814' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_269_4671'
          x1='26.3691'
          y1='20.6415'
          x2='7.95797'
          y2='2.23032'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF7044' stopOpacity='0' />
          <stop offset='1' stopColor='#FFA425' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_269_4671'
          x1='41.9522'
          y1='36.2104'
          x2='9.03265'
          y2='3.29082'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF7044' />
          <stop offset='1' stopColor='#F92814' />
        </linearGradient>
        <linearGradient
          id='paint4_linear_269_4671'
          x1='49.1717'
          y1='43.4294'
          x2='34.5813'
          y2='28.839'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F92814' stopOpacity='0' />
          <stop offset='1' stopColor='#C1272D' />
        </linearGradient>
        <linearGradient
          id='paint5_linear_269_4671'
          x1='28.7269'
          y1='21.2661'
          x2='36.6282'
          y2='33.3156'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F9F7FC' />
          <stop offset='1' stopColor='#F0DDFC' />
        </linearGradient>
        <clipPath id='clip0_269_4671'>
          <rect width='64' height='64' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default function Contact() {
  const handleSubmit = () => {
    contactApi.createContact(input)
  }
  const [input, setInput] = useState({
    company_name: '',
    name: '',
    mail: '',
    phone: '',
    description: ''
  })
  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value })

    console.log('value is:', input)
  }
  const mainBackgroundClasses = `bg-mainBackground min-h-screen bg-[url("/images/Vector6.png")] bg-contain bg-top bg-no-repeat`
  return (
    <div className={mainBackgroundClasses} style={{ backgroundSize: '800px' }}>
      <LogoFixed />
      <div className='mx-auto flex max-w-[1600px]'>
        <div className='w-[110px] border-r-2 border-[#0B0A0A] max-[768px]:hidden' style={{ height: '50vh' }}></div>
        <div className='w-full py-[110px] pr-36 pl-8 max-md:p-0 max-md:py-[85px]'>
          <div className='text-center text-white max-md:ml-4 max-md:text-left'>お気軽にお問い合わせください</div>
          <h3 className='mb-10 mt-3 text-center text-5xl text-white max-md:ml-4 max-md:text-left'>Contact Us</h3>
          <div className='mt-5 flex flex-wrap'>
            <div className='w-1/3 max-md:px-4 max-[768px]:w-full'>
              <h3 className='text-xl font-extrabold text-[#36AAFA]'>LET'S START A PROJECT</h3>
              <h4 className='mt-7 text-sm font-extrabold text-orange'>Address</h4>
              <p className='mt-1 text-sm text-white opacity-60'>
                〒163-0532 <br /> 東京都新宿区西新宿１丁目２６ <br /> −２ 新宿野村ビル 32階
              </p>
              <h4 className='mt-7 text-sm font-extrabold text-orange'>Tel</h4>
              <p className='mt-1 text-sm text-white opacity-60'>03-5322-2953</p>
              <h4 className='mt-7 text-sm font-extrabold text-orange'>Email</h4>
              <p className='mt-1 text-sm text-white opacity-60'>info@cet-app.com</p>
            </div>
            <div className='relative flex w-2/3 flex-col items-center justify-center max-md:mt-6 max-[768px]:w-full'>
              <Iframe
                url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.349832750534!2d139.69317175089557!3d35.69300793683605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd5c3b6022d%3A0x2d4d3dd5a50a5b2e!2z44CSMTYzLTA1MzIg5p2x5Lqs6YO95paw5a6_5Yy66KW_5paw5a6_77yR5LiB55uu77yS77yW4oiS77ySIOaWsOWuv-mHjuadkeODk-ODqyAzMumajg!5e0!3m2!1svi!2s!4v1661930477323!5m2!1svi!2s'
                width='640px'
                height='320px'
                id=''
                className='w-full'
                display='block'
                position='relative'
              />
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                <MapIcon />
              </div>
            </div>
          </div>
          <div className='mt-24 flex flex-wrap max-md:mt-6 max-md:px-4 max-[768px]:flex-col-reverse'>
            <div className='w-1/3 max-[768px]:w-full'>
              <img src='/images/Frame29.png' className='w-full' alt='' />
            </div>
            <div className='w-2/3 max-[768px]:w-full'>
              <h3 className='mb-8 text-xl font-extrabold text-[#36AAFA]'>CONTACT FORM</h3>
              <div className='grid grid-cols-2 gap-8 text-white max-md:grid-cols-1'>
                <Input handleChange={handleChange} label='会社名' placeholder='輸入' id='company_name' />
                <Input handleChange={handleChange} label='ご担当者名' placeholder='輸入' id='name' />
                <Input type='email' handleChange={handleChange} label='メールアドレス' placeholder='輸入' id='mail' />
                <Input handleChange={handleChange} label='電話番号' placeholder='輸入' id='phone' />
                <Input handleChange={handleChange} label='お問い合わせ内容' placeholder='輸入' id='description' />
              </div>
              <button
                onClick={handleSubmit}
                className='gap mx-auto mt-8 flex items-center justify-center gap-1 rounded-[100px] border-r border-none bg-[#36AAFA] px-6 py-3 text-base text-white hover:-translate-y-1 hover:scale-105'
              >
                送信
                <Arrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
