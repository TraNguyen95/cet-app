import persion from "src/assets/images/persion.png";
import cardProfile from "src/scss/components/cardProfile.scss"
import {useEffect, useRef} from "react";

export const CardProfile = () => {
  const ref = useRef();
  const preventDefault = (e) => {
    e.preventDefault();
    return false;
  }
  useEffect(() => {
      const element = ref.current;
      element.addEventListener('touchmove', preventDefault, {passive: false})
      return () => {
        element.removeEventListener('touchmove', preventDefault, {passive: false});
      }
    }
    , []);
  return (
    <>
      <div className="wrapCard-profile">
        <div className="rounded-xl overflow-hidden h-fit" ref={ref}>
          <img src={persion} alt="" className="object-cover w-full"/>
        </div>
        <div className="flex flex-col justify-center">
          <span
            className="text-textBlueCustom-900 truncate text-sm flex justify-center mt-4 mb-1">Backend developer</span>
          <span
            className="text-white truncate text-sm text-2xl flex justify-center mb-2 font-medium textName">Motonami</span>
          <span className="text-white truncate text-sm flex justify-center">3 years experience</span>
          <span
            className="text-white  text-sm flex justify-center mb-2 text-custom">Nodejs, PHP, Reactjs, Vuejs...</span>
        </div>
      </div>
    </>
  )
}