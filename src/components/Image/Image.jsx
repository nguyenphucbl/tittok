import { forwardRef, useState } from 'react'
import images from '@/assets/images'
import styles from './Image.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
function Image({ classNames, src, fallback = images.noImage, ...props }, ref) {
  const [fallbackSrc, setFallbackSrc] = useState('')
  const handleError = () => {
    setFallbackSrc(fallback)
  }
  return (
    <img
      className={cx('wrapper', classNames)}
      src={fallbackSrc || src}
      {...props}
      ref={ref}
      onError={handleError}
    />
  )
}

export default forwardRef(Image)
