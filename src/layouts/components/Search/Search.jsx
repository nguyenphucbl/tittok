import { AccountItems } from '@/components/AccountItems'
import { Wrapper as PopperWrapper } from '@/components/Popper'
import { useDebounce } from '@/hooks'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import styles from './Search.module.scss'
import { handleSearch } from '@/services/searchService'

const cx = classNames.bind(styles)
export default function Search() {
  //TODO - Handle Logic
  const [searchValue, setSearchValue] = useState('')
  const [showResults, setShowResults] = useState(true)
  const [loading, setLoading] = useState(false)
  const debounced = useDebounce(searchValue, 400)
  const [searchResults, setSearchResults] = useState([])
  const inputSearch = useRef(null)
  useEffect(() => {
    if (!debounced.trim()) return setSearchResults([])
    setLoading(true)
    const fetchData = async () => {
      const data = await handleSearch(debounced)
      setSearchResults(data)
      setLoading(false)
    }
    fetchData()
  }, [debounced])
  const handleSearchChange = ({ target: { value } }) => {
    const searchValue = value
    if (!searchValue.startsWith(' ')) setSearchValue(searchValue)
  }
  const handleClearValue = () => {
    setSearchValue('')
    inputSearch.current.focus()
  }
  const handleHideResults = () => {
    setShowResults(false)
  }
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    //NOTE Tippy must have wrap parent
    <div>
      <HeadlessTippy
        interactive={true}
        visible={showResults && searchResults.length > 0}
        placement='bottom-start'
        render={attrs => (
          <div className={cx('search-results')} {...attrs} tabIndex='-1'>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResults.map(result => (
                <AccountItems key={result.id} data={result} />
              ))}
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
            onChange={handleSearchChange}
            onFocus={() => setShowResults(true)}
            ref={inputSearch}
          />

          {loading ? (
            <div className={cx('loading')}>{<FontAwesomeIcon icon={faSpinner} spin />}</div>
          ) : (
            !!searchValue && (
              <button className={cx('clear')} onClick={handleClearValue}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            )
          )}
          <button className={cx('search-btn')} onMouseDown={handleSubmit}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  )
}
