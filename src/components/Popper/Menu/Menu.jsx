import { Wrapper as PopperWrapper } from '@/components/Popper'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'
import styles from './Menu.module.scss'
import MenuItems from './MenuItems'
import Header from './Header'
import { useState } from 'react'
const cx = classNames.bind(styles)
Menu.propTypes = {
  children: propTypes.node.isRequired,
  items: propTypes.array,
  onChange: propTypes.func.isRequired,
}
export default function Menu({ children, items = [], onChange, hideOnClick = false }) {
  const [history, setHistory] = useState([{ data: items }])
  const current = history[history.length - 1]
  const renderItems = () =>
    current.data.map((item, index) => {
      const isParent = !!item.children

      return (
        <MenuItems
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory(prev => [...prev, item.children])
            } else {
              onChange(item)
            }
          }}
        />
      )
    })
  return (
    <Tippy
      interactive={true}
      delay={[0, 300]}
      offset={[16, 10]}
      placement='bottom-end'
      render={attrs => (
        <div className={cx('menu-list')} {...attrs} tabIndex='-1'>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title={'Language'}
                onBack={() => {
                  setHistory(prev => prev.slice(0, -1))
                }}
              />
            )}

            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory([{ data: items }])}
      hideOnClick={hideOnClick}
    >
      {children}
    </Tippy>
  )
}
