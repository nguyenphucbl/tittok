import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import Header from '../components/Header/Header'
import styles from './DefaultLayout.module.scss'
import Sidebar from '../components/Sidebar'
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
const cx = classNames.bind(styles)
export default function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  )
}
