import PropTypes from 'prop-types';


function Header({text, bgColor, textColor}) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor
  };
  

  return (
    <header style={headerStyle}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.13)',
    textColor: 'rgb(207 255 74)'
};

Header.propTypes = {
    text: PropTypes.string, 
    bgColor: PropTypes.string,
    textColor: PropTypes.string
};
export default Header