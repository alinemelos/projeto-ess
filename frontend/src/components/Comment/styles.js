const styles = {
  comment: {
    width: '99%',
    marginBottom: '1rem',
    borderLeft: '2px solid black',
    paddingLeft: '1rem'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  comment__header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '0.5rem',
    fontSize: '18px',
    fontFamily: 'Bebas Neue'
  },
  comment__body: {
    display: 'flex',
    width: '100%',
    backgroundColor: 'white'
  },
  comment__content: {
    fontSize: '16px',
    marginBottom: '0.5rem',
    fontFamily: 'Montserrat'
  },
  comment__actions: {
    display: 'flex',
    marginLeft: 'auto',
    justifyContent: 'flex-end',
    gap: '0.5rem'
  },
  arrow: {
    marginTop: '1rem',
    position: 'relative' /* Position the button absolutely */,
    top: '-10px' /* Position the button vertically centered */,
    //transform: 'translateY(-50%)' /* Adjust for vertical centering */,
    right: '-1.7rem' /* Add a right margin for spacing */,
    padding: '0.5rem' /* Add some padding for visual comfort */
  },
  menu: {
    position: 'relative',
    top: '-50%',
    left: '0'
  },
  nestedCommentContainer: {
    marginLeft: '1rem',
    borderLeft: '2px solid black',
    paddingLeft: '1rem',
    marginBottom: '1rem'
  },
  nestedComment: {
    marginBottom: '0rem',
    paddingLeft: '0rem'
  },
  comment__actions__options: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    gap: '0.5rem'
  },
  containerEditing: {
    display: 'None'
  },
  none: {
    display: 'None'
  }
}

export default styles
