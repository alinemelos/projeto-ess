// styles.js

const styles = {
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  },
  modal: {
    width: '73%',
    margin: '0 auto',
    padding: '3rem',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column', // Ajustado para coluna
    borderRadius: '22px'
  },
  exit: {
    display: 'flex',
    justifyContent: 'flex-end' // Ajustado para alinhar à direita
  },
  exit__btn: {
    cursor: 'pointer'
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centralizar o conteúdo
    justifyContent: 'center' // Centralizar o conteúdo
  },
  title__text: {
    fontWeight: '400',
    fontSize: '2rem',
    textAlign: 'center' // Centralizar o texto
  },
  platforms: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  platform: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#000'
  },
  platformImage: {
    width: '32px',
    height: '32px',
    marginRight: '10px'
  }
}

export default styles
