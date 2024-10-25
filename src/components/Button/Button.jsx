import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'
import PropTypes from 'prop-types'
const cx = classNames.bind(styles)
Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,

  // small: PropTypes.bool,
  // large: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
}
export default function Button({
  to,
  href,
  primary = false,
  outline = false,

  onClick,
  children,
  disabled = false,
  // small = false,
  // large = false,
  size = 'medium',
  text = false,
  rounded = false,
  className,
  leftIcon,
  rightIcon,
  ...passProps
}) {
  let Comp = 'button'
  const _props = {
    onClick,
    ...passProps,
  }
  //NOTE  if disabled, remove all event listeners
  if (disabled) {
    Object.keys(_props).forEach(key => {
      // if (typeof _props[key] === 'function') {
      //   _props[key] = () => {}
      // }
      if (key.startsWith('on') && typeof _props[key] === 'function') {
        delete _props[key]
      }
    })
  }
  if (to) {
    _props.to = to
    Comp = Link
  } else if (href) {
    _props.href = href
    Comp = 'a'
  }
  const classes = cx('wrapper', {
    primary,
    outline,
    [size]: true,
    text,
    disabled,
    rounded,
    [className]: className,
    // small,
    // large,
  })
  return (
    <Comp className={classes} {..._props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  )
}
