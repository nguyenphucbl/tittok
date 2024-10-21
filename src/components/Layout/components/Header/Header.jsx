import images from '@/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeadlessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import 'tippy.js/dist/tippy.css'
import { AccountItems } from '@/components/AccountItems'
import { Button } from '@/components/Button'
import { Menu, Wrapper as PopperWrapper } from '@/components/Popper'
import {
  faCircleXmark,
  faCoins,
  faEarthAmericas,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faQuestion,
  faSignIn,
  faSignOut,
  faSpinner,
  faUpload,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
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
  const [searchResults, setSearchResults] = useState([])
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
          <img src={images.logo} alt='' />
        </div>

        <div>
          <HeadlessTippy
            interactive={true}
            visible={searchResults.length > 0}
            render={attrs => (
              <div className={cx('search-results')} {...attrs} tabIndex='-1'>
                <PopperWrapper>
                  <h4 className={cx('search-title')}>Accounts</h4>
                  <AccountItems />
                </PopperWrapper>
              </div>
            )}
          >
            <div className={cx('search')}>
              <input
                type='text'
                name=''
                id=''
                placeholder='Search accounts and videos'
                spellCheck='false'
              />
              <button className={cx('clear')}>
                <FontAwesomeIcon icon={faCircleXmark} />
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} spin />
              </button>
              <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </HeadlessTippy>
        </div>

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content='Upload video' placement='bottom'>
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faUpload} />
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
              <img
                className={cx('user-avatar')}
                src='
                  https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d62603d4b5041045d6cffbe872d66915.jpeg?lk3s=a5d48078&nonce=21496&refresh_token=5ecac97bccfc719ebf5da4e5b9896b56&x-expires=1729684800&x-signature=b7ScosbQsc3K8Tn3cLs3D3oZxXk%3D&shp=a5d48078&shcp=81f88b70
                  '
                alt='nguyenvana'
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
