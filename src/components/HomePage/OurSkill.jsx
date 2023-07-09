import ButtonGoDown from '../Button'
import '../../scss/components/ourSkill.scss'
import Rectangle31 from '../../assets/images/rectangle31.png'
export const OurSkill = () => {
  return (
    <>
      <div className='ourSkill flex flex-col bg-darkGray-900'>
        <div className='ButtonGoDown absolute'>
          <ButtonGoDown />
        </div>
        <div className='flex h-full'>
          <div className='ourSkill-wrap-text flex flex-col text-white'>
            <span className='mb-3'>Skill</span>
            <span className='text-large mb-4'>私たちの技術</span>
            <p>
              マッチングアプリ、SNSアプリ、ライブ配信アプリ、音声配信アプリ、動画配信アプリ、NFTマーケットプレイス構築、etc...{' '}
              <br />
              <br />
              iOS/Androidに関してリリース経験が豊富にあるメンバーがマネジメントを行い、Kotlin、Swift、Objective-C
              を用いたネイティブアプリケーションから、一部がHTM5 + CSS + JavaScript
              のWebアプリケーションを組み込んだハイブリッド方式のアプリケーション、flutterを用いたネイティブアプリまで、お客様のご予算や特性に合わせて最適な開発プラットフォームを提案します。{' '}
            </p>
          </div>
          <div className='wrap-img h-5/6 w-full'>
            <img src={Rectangle31} alt='' className='h-full w-full' />
          </div>
        </div>
      </div>
    </>
  )
}
