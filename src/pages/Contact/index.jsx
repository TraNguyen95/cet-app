import Iframe from 'react-iframe'
export default function Contact() {
  const mainBackgroundClasses = `bg-mainBackground bg-[url("/images/Vector14.png")] bg-contain bg-right bg-no-repeat min-h-screen`
  return (
    <div className={mainBackgroundClasses} style={{ backgroundPositionY: '-190px' }}>
      <div className='mx-auto max-w-[1600px] flex'>
        <div className='w-[110px] border-r-2 border-[#0B0A0A]' style={{ height: '50vh' }}></div>
        <div className='w-full pr-36 pl-8 py-[110px]'>
          <div className='text-center text-white'>お気軽にお問い合わせください</div>
          <h3 className='mb-10 mt-3 text-center text-5xl text-white'>Contact Us</h3>
          <div className='mt-5 flex'>
            <div className='w-1/3'>
              <h3 className='text-xl  text-[#36AAFA]'>LET'S START A PROJECT</h3>
              <h4 className='mt-7 text-sm font-extrabold text-orange'>Address</h4>
              <p className='mt-1 text-sm text-white opacity-60'>
                〒163-0532 <br /> 東京都新宿区西新宿１丁目２６ <br /> −２ 新宿野村ビル 32階
              </p>
              <h4 className='mt-7 text-sm font-extrabold text-orange'>Tel</h4>
              <p className='mt-1 text-sm text-white opacity-60'>03-5322-2953</p>
              <h4 className='mt-7 text-sm font-extrabold text-orange'>Email</h4>
              <p className='mt-1 text-sm text-white opacity-60'>info@cet-app.com</p>
            </div>
            <div className='flex w-2/3 flex-col'>
              <Iframe
                url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.349832750534!2d139.69317175089557!3d35.69300793683605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd5c3b6022d%3A0x2d4d3dd5a50a5b2e!2z44CSMTYzLTA1MzIg5p2x5Lqs6YO95paw5a6_5Yy66KW_5paw5a6_77yR5LiB55uu77yS77yW4oiS77ySIOaWsOWuv-mHjuadkeODk-ODqyAzMumajg!5e0!3m2!1svi!2s!4v1661930477323!5m2!1svi!2s'
                width='640px'
                height='320px'
                id=''
                className='w-full'
                display='block'
                position='relative'
              />
              <h3 className='mt-24  mb-8 text-xl  text-[#36AAFA]'>Contact Form</h3>
              <div className='grid grid-cols-2 gap-8 text-white'>
                <div className='mb-8'>
                  <p className='w-full text-sm opacity-60 '>会社名</p>
                  <input
                    type='text'
                    className='w-full rounded-sm border-b-[1px] border-[#434A5F] bg-transparent py-4 placeholder-[#434A5F] placeholder-opacity-100 outline-none focus:border-gray-500 focus:shadow-sm'
                    placeholder='輸入'
                  />
                </div>
                <div className='mb-8'>
                  <p className='w-full text-sm opacity-60 '>会社名</p>
                  <input
                    type='text'
                    className='w-full rounded-sm border-b-[1px] border-[#434A5F] bg-transparent py-4 placeholder-[#434A5F] placeholder-opacity-100 outline-none focus:border-gray-500 focus:shadow-sm'
                    placeholder='輸入'
                  />
                </div>
                <div className='mb-8'>
                  <p className='w-full text-sm opacity-60 '>会社名</p>
                  <input
                    type='text'
                    className='w-full rounded-sm border-b-[1px] border-[#434A5F] bg-transparent py-4 placeholder-[#434A5F] placeholder-opacity-100 outline-none focus:border-gray-500 focus:shadow-sm'
                    placeholder='輸入'
                  />
                </div>
                <div className='mb-8'>
                  <p className='w-full text-sm opacity-60 '>会社名</p>
                  <input
                    type='text'
                    className='w-full rounded-sm border-b-[1px] border-[#434A5F] bg-transparent py-4 placeholder-[#434A5F] placeholder-opacity-100 outline-none focus:border-gray-500 focus:shadow-sm'
                    placeholder='輸入'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
