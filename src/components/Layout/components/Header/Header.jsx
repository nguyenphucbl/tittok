import images from '@/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'

import { AccountItems } from '@/components/AccountItems'
import { Button } from '@/components/Button'
import { Menu, Wrapper as PopperWrapper } from '@/components/Popper'
import {
  faCircleXmark,
  faEarthAmericas,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faQuestion,
  faSignIn,
  faSpinner,
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
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt='' />
        </div>

        <div>
          <Tippy
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
          </Tippy>
        </div>

        <div className={cx('actions')}>
          <Button text>Upload</Button>
          <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
            Login
          </Button>
          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  )
}