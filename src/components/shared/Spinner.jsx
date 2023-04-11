import spinner from '../assets/loading.gif'

function Spinner() {
  return (
    <img 
        src={spinner} 
        alt='Loading...' 
        style={{ width: '68px', display: 'block', margin: 'auto'}} 
    />
  )
}

export default Spinner