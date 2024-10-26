import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node,
}
export default function MenuItem({ title, to, icon, activeIcon }) {
  return (
    <NavLink end to={to} className={nav => cx('menu-item', { active: nav.isActive })}>
      {({ isActive }) => (
        <>
          {isActive ? activeIcon : icon}
          <span className={cx('title')}>{title}</span>
        </>
      )}
    </NavLink>
  )
}
