import { Button } from '@/components/Button'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
MenuItems.propTypes = {
  data: propTypes.object.isRequired,
}
export default function MenuItems({ data, onClick }) {
  return (
    <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  )
}
