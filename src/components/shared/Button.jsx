import PropTypes from 'prop-types'

function Button({text, version, isDisabled, type}) {
  return (
    <button 
        type={type} 
        disabled={isDisabled} 
        className={`btn btn-${version}`}>
        {text}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button