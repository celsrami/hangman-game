import '../../styles/components/Loading.scss'
import PropTypes from 'prop-types';

function Loading({ isLoading }) {
  return (
    isLoading ? (<span className="loading" />) :
      null
  )
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default Loading;