import classNames from 'classnames/bind'
import styles from './SuggestedAccounts.module.scss'
const cx = classNames.bind(styles)
import PropTypes from 'prop-types'
import AccountItem from './AccountItem'
SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
}
export default function SuggestedAccounts({ label }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <p className={cx('more-btn')}>See all</p>
    </div>
  )
}
