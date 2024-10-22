import classNames from 'classnames/bind'
import styles from './AccountItems.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Image } from '@/components/Image'
const cx = classNames.bind(styles)
export default function AccountItems() {
  return (
    <div className={cx('wrapper')}>
      <Image
        src='
      https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cbf13c2876fbdfffe9b5f9dcc2037e84.jpeg?lk3s=a5d48078&nonce=84442&refresh_token=697da819dea03716f18c02cf845d1bae&x-expires=1729515600&x-signature=ZWSN6Rqtd%2Bbqg2RrNyxRn4ZzRtU%3D&shp=a5d48078&shcp=b59d6b55
      '
        alt=''
        className={cx('avatar')}
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyen Van P</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
        </p>

        <span className={cx('username')}>nguyenvanaa</span>
      </div>
    </div>
  )
}
