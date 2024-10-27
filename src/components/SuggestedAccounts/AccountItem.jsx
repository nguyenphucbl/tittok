import { Wrapper as PopperWrapper } from '@/components/Popper'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import AccountPreview from './AccountPreview'
import styles from './SuggestedAccounts.module.scss'
const cx = classNames.bind(styles)

export default function AccountItem() {
  const renderPreview = prop => {
    return (
      <div {...prop} className={cx('tooltip')} tabIndex='-1'>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    )
  }
  return (
    <Tippy
      offset={[-16, 0]}
      interactive
      delay={[800, 0]}
      placement='bottom-start'
      render={renderPreview}
    >
      <div className={cx('account-item')}>
        <img src='https://picsum.photos/200' alt='avatar' className={cx('avatar')} />
        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>dsnguyendailam</strong>
            <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
          </p>
          <p className={cx('name')}>Ds Nguyễn Đại Lâm</p>
        </div>
      </div>
    </Tippy>
  )
}
