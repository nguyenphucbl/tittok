import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from './Sidebar/Sidebar'
import PropTypes from 'prop-types'
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'
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
