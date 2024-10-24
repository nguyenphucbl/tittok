import images from '@/assets/images'
import { Button } from '@/components/Button'
import Message from '@/components/Icons/Message'
import UploadIcon from '@/components/Icons/UploadIcon'
import { Image } from '@/components/Image'
import { Menu } from '@/components/Popper'
import routesConfig from '@/config/routes'
import {
  faCoins,
  faEarthAmericas,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faQuestion,
  faSignIn,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react'
import classNames from 'classnames/bind'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'tippy.js/dist/tippy.css'
import { Search } from '../Search'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)
export default function Header() {
  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faEarthAmericas} />,
      title: 'English',
      children: {
        title: 'Language',
        data: [
          { type: 'language', code: 'en', title: 'English' },
          { type: 'language', code: 'es', title: 'Spanish' },
          { type: 'language', code: 'fr', title: 'French' },
          { type: 'language', code: 'vi', title: 'Vietnamese' },
        ],
      },
    },
    { icon: <FontAwesomeIcon icon={faQuestion} />, title: 'Feedback and help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
  ]
  //TODO - Handle Logic
  const [searchResults, setSearchResults] = useState([1, 2])
  const handleMenuChange = menuItem => {
    switch (menuItem.type) {
      case 'language':
        break
      default:
    }
  }
  const currentUser = true
  const userMenu = [
    { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/@hoa' },
    { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/coin' },
    { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings', to: '/settings' },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/settings',
      separate: true,
    },
  ]
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to={routesConfig.home} className={cx('logo-link')}>
            <img src={images.logo} alt='' />
          </Link>
        </div>

        <Search />
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content='Upload video' placement='bottom'>
                <button className={cx('action-btn')}>
                  {/* <FontAwesomeIcon icon={faUpload} /> */}
                  <UploadIcon className={cx('upload-icon')} />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content='Messages' placement='bottom'>
                <button className={cx('action-btn', 'message-btn')}>
                  <Message className={cx('message-icon')} />
                  <span className={cx('badge-message')}>50</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Login
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src='
                  https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d62603d4b5041045d6cffbe872d66915.jpeg?lk3s=a5d48078&nonce=21496&refresh_token=5ecac97bccfc719ebf5da4e5b9896b56&x-expires=1729684800&x-signature=b7ScosbQsc3K8Tn3cLs3D3oZxXk%3D&shp=a5d48078&shcp=81f88b70
                  '
                alt='nguyenvana'
                fallback='https://yt3.ggpht.com/yti/ANjgQV9T3srm3emLwi3DYZV5dayvgG9lw5KIPVZqj7jwDVE=s88-c-k-c0x00ffffff-no-rj'
              />
            ) : (
              <>
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  )
}
