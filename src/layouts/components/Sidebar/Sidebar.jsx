import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import Menu, { MenuItem } from './Menu'
import config from '@/config'
import {
  HomeIconRegular,
  HomeIconSolid,
  LiveIcon,
  LiveIconSolid,
  UserGroupIcon,
  UserGroupIconSolid,
} from '@/components/Icons'
const cx = classNames.bind(styles)
export default function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title='For You'
          to={config.routes.home}
          icon={<HomeIconRegular />}
          activeIcon={<HomeIconSolid />}
        />
        <MenuItem
          title='Following'
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupIconSolid />}
        />
        <MenuItem
          title='Live'
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveIconSolid />}
        />
      </Menu>
    </aside>
  )
}
