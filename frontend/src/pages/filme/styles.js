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
  container: {
    maxWidth: '80vw',
    margin: '0 auto 0 7%',
    padding: '20px'
  },
  head: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '20px',
    alignItems: 'baseline'
  },
  title: {
    fontSize: '3.2em',
    fontFamily: 'Bebas Neue',
    marginBottom: '20px',
    color: '#000'
  },
  minordetail: {
    display: 'flex',
    gap: '5px'
  },
  titlesbegin: {
    fontSize: '1.2em',
    fontFamily: 'Bebas Neue',
    color: '#333'
  },
  image: {
    width: '20%',
    borderRadius: '10px',
    objectFit: 'cover' // Assegura que a imagem cubra totalmente a caixa
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    alignItems: 'stretch' // Faz com que as caixas dentro de info tenham a mesma altura
  },
  synopsis: {
    fontSize: '1.2em',
    color: '#555'
  },
  detail: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // gap: '20px',
    flexGrow: 1 // Faz com que a caixa de detalhes cresça para preencher o espaço disponível
  },
  synopsisandinfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  butons: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px'
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
