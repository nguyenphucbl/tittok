import {
  HomeIconRegular,
  HomeIconSolid,
  LiveIcon,
  LiveIconSolid,
  UserGroupIcon,
  UserGroupIconSolid,
} from '@/components/Icons'
import SuggestedAccounts from '@/components/SuggestedAccounts'
import config from '@/config'
import classNames from 'classnames/bind'
import Menu, { MenuItem } from './Menu'
import styles from './Sidebar.module.scss'
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
      <SuggestedAccounts label='Suggested accounts' />
      {/* <SuggestedAccounts label='Following' /> */}
    </aside>
  )
}
