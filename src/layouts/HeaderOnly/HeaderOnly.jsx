import PropTypes from 'prop-types'
import Header from '../components/Header/Header'
HeaderOnly.propTypes = {
  children: PropTypes.node.isRequired,
}
export default function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='content'>{children}</div>
      </div>
    </div>
  )
}
