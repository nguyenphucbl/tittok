import PropTypes from 'prop-types'
Menu.propTypes = {
  children: PropTypes.node.isRequired,
}
export default function Menu({ children }) {
  return <nav>{children}</nav>
}
