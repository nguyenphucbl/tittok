import { AccountItems } from '@/components/AccountItems'
import { Wrapper as PopperWrapper } from '@/components/Popper'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { useRef, useState } from 'react'
import styles from './Search.module.scss'
const cx = classNames.bind(styles)
export default function Search() {
  //TODO - Handle Logic
  const [searchValue, setSearchValue] = useState('')
  const [showResults, setShowResults] = useState(true)
  const [searchResults, setSearchResults] = useState([1, 2])
  const inputSearch = useRef(null)
  const handleClearValue = () => {
    setSearchValue('')
    inputSearch.current.focus()
  }
  const handleHideResults = () => {
    setShowResults(false)
  }
  return (
    <div>
      <HeadlessTippy
        interactive={true}
        visible={showResults && searchResults.length > 0}
        placement='bottom-start'
        render={attrs => (
          <div className={cx('search-results')} {...attrs} tabIndex='-1'>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              <AccountItems />
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResults}
      >
        <div className={cx('search')}>
          <input
            type='text'
            name=''
            id=''
            placeholder='Search accounts and videos'
            spellCheck='false'
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            onFocus={() => setShowResults(true)}
            ref={inputSearch}
          />
          {!!searchValue && (
            <button className={cx('clear')} onClick={handleClearValue}>
              <FontAwesomeIcon icon={faCircleXmark} />
              {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} spin /> */}
            </button>
          )}

          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  )
}
