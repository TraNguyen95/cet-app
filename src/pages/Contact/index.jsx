export default function Contact() {
  const mainBackgroundClasses = `bg-mainBackground bg-[url("/images/Vector14.png")] bg-contain bg-left-top bg-no-repeat py-6 min-h-screen`
  return (
    <div className={mainBackgroundClasses}>
      <div className='text-center text-white'>お気軽にお問い合わせください</div>
      <h3 className='mb-10 mt-3 text-left text-center text-5xl text-white'>Contact Us</h3>
      <div className='mt-5 flex px-9'>
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
        <div className='flex w-2/3 flex-col'>Nội dung của div bên phải </div>
      </div>
    </div>
  )
}
