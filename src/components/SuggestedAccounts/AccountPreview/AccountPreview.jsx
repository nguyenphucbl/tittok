import classNames from 'classnames/bind'
import styles from './AccountPreview.module.scss'
import { Button } from '@/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)
export default function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img src='https://picsum.photos/200' alt='' className={cx('avatar')} />
        <div>
          <Button primary className={cx('follow-btn')}>
            Follow
          </Button>
        </div>
      </div>
      <div className={cx('body')}>
        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>dsnguyendailam</strong>
            <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
          </p>
          <p className={cx('name')}>Ds Nguyễn Đại Lâm</p>
          <p className={cx('analytics')}>
            <strong className={cx('value')}>8.2M</strong>
            <span className={cx('label')}>Followers</span>
            <strong className={cx('value')}>8.2M</strong>
            <span className={cx('label')}>like</span>
          </p>
        </div>
      </div>
    </div>
  )
}
