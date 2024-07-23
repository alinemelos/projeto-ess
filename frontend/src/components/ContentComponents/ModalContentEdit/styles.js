// Example styles object
const styles = {
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgb(0, 0, 0, 0.54)',
    // position: 'relative',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  },
  modal: {
    backgroundColor: 'white',
    padding: '2% 6.1%',
    border: '1px solid black',
    borderRadius: '22px',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    width: '80%'
  },
  titulo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '2.6rem 0rem'
  },
  fonte_titulo: {
    fontFamily: 'Bebas Neue',
    fontSize: '3rem'
  },

  content: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  poster_img: {
    width: '29.6%',
    height: 'auto',
    borderRadius: '12px',
    border: '2px solid #000',
    maxWidth: '286px',
    maxHeight: '442px'
  },
  form: {
    display: 'flex',
    width: '65%',
    flexDirection: 'column'
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Be Vietnam Pro',
    fontSize: '1rem',
    height: '15%',
    marginBottom: '1.5rem',
    gap: '1.5rem'
  },
  input_name: {
    width: '30.9%',
    padding: '5px',
    border: '1px solid black',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  input_diretor: {
    width: '23%',
    padding: '5px',
    border: '1px solid black',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  input_year: {
    width: '12%',
    padding: '5px',
    border: '1px solid black',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  input_duration: {
    width: '13.2%',
    padding: '5px',
    border: '1px solid black',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  input_genre: {
    width: '23.7%',
    padding: '5px',
    border: '1px solid black',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  sinopse_textarea: {
    backgroundColor: 'transparent',
    border: '1px solid #000',
    borderRadius: '6px',
    fontFamily: 'Montserrat',
    fontSize: '1.2rem',
    textAlign: 'left',
    padding: '22px',
    height: '100%'
  },
  confirm: {
    display: 'flex',
    justifyContent: 'right',
    marginTop: '1.6rem'
  },
  button_confirm: {
    cursor: 'pointer',
    backgroundColor: '#FF182C',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1.5rem',
    color: '#fff',
    padding: '12px 3.5rem',
    fontFamily: 'Bebas Neue'
  }
}

export default styles
