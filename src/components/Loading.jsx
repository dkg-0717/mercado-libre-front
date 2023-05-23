import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import gsap from 'gsap'
import '../assets/css/loading.css'

const Loading = () => {

  const tl = gsap.timeline({
    delay: 0.5,
    repeat: -1,
    ease: "expo.inOut"
  });
  const { isLoading } = useSelector((state) => state.products)

  const image = 'https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__large_plus@2x.png'

  useEffect(() => {
    tl.to(".cover-image-1", { duration: 1, width: 0 })
      .set(".cover-image-2", { zIndex: 1 })
      .to(".cover-image-2", { duration: 1, width: 0 })
  }, [isLoading])

  useEffect(() => {
    return () => {
      tl.pause()
    };
  }, [isLoading])

  return (
    <div className='loading-container'>
      <div className="loader-image">
        <div className="cover-image-1"></div>
        <div className="cover-image-2"></div>
        <img className='ml-logo' src={image} alt='mercado libre logo'></img>
      </div>
    </div>
  )
}

export default Loading