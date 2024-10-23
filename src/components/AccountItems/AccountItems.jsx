import classNames from 'classnames/bind'
import styles from './AccountItems.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Image } from '@/components/Image'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const cx = classNames.bind(styles)
AccountItems.propTypes = {
  data: PropTypes.object.isRequired,
}
export default function AccountItems({ data }) {
  const { full_name, avatar, nickname, tick } = data
  return (
    <Link to={`/profile/${nickname}`} className={cx('wrapper')}>
      <Image src={avatar} alt={full_name} className={cx('avatar')} />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>{full_name}</span>
          {tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />}
        </p>

        <span className={cx('username')}>{nickname}</span>
      </div>
    </Link>
  )
}
