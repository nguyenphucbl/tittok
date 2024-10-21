import { Button } from '@/components/Button'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
MenuItems.propTypes = {
  data: propTypes.object.isRequired,
}
export default function MenuItems({ data, onClick }) {
  const classes = cx('menu-item', { separate: data.separate })

  return (
    <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  )
}
