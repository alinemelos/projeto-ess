import background from '../../assets/bg.png'

const styles = {
  bg: {
    backgroundAttachment: 'fixed',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    minHeight: '100vh'
  },
  button: {
    backgroundColor: '#FF182C'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    border: '1.6px solid black',
    padding: '5% 5%',
    borderRadius: '12px'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vw'
  },
  title: {
    fontFamily: 'Bebas Neue',
    fontSize: '2rem',
    textAlign: 'center',
    width: '100%',
    borderBottom: '1.6px solid black'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }
}

export default styles
