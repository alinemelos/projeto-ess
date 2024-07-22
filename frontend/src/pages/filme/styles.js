import background from '../../assets/bg.png'

// src/pages/FilmStyles.js
const styles = {
  bg: {
    backgroundAttachment: 'fixed',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    minHeight: '100vh'
  },
  container: {
    maxWidth: '80vw',
    margin: '0 auto 0 7%',
    padding: '20px'
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#333'
  },
  image: {
    width: '15%'
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px'
  },
  synopsis: {
    fontSize: '1.2em',
    color: '#555'
  },
  detail: {
    marginTop: '20px',
    fontSize: '1em',
    color: '#777',
    display: 'flex',
    flexDirection: 'column',
    gap: '50px'
  },
  forum: {
    marginTop: '4rem'
  },
  forum__title: {
    fontFamily: 'Bebas Neue',
    fontWeight: '200',
    fontSize: '2rem',
    marginRight: '1.5rem',
    marginBottom: '1rem'
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '-1'
  },
  gradient__top_right: {
    display: 'block',
    position: 'absolute',
    top: '5%',
    left: '77%',
    width: '350px',
    height: '300px',
    backgroundColor: '#FF182C',
    filter: 'blur(200px)'
  },
  gradient__bottom_left: {
    display: 'block',
    position: 'absolute',
    top: '40%',
    left: '-5%',
    width: '350px',
    height: '300px',
    backgroundColor: '#FF182C',
    filter: 'blur(200px)'
  }
}

export default styles
