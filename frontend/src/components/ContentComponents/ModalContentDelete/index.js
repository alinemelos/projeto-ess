import React, { useState } from 'react'
import styles from './styles'
import { IoCloseSharp } from 'react-icons/io5'
import DeleteMovie from '../../../services/content/DeleteMovie'
import ModalConfirm from '../ModalConfirm'
import { useNavigate } from 'react-router-dom'

const ModalContentDelete = ({ handleDelete, id }) => {
  const [message, setMessage] = useState('')
  const [switchConfirm, setSwitchConfirm] = useState(false)
  const [booleano, setBooleano] = useState(false)
  const navigate = useNavigate()
  const handleDeleteMovie = async () => {
    toggleConfirm()
    const response = await DeleteMovie(id)
    if (response.status === 200) {
      setBooleano(true)
      setMessage('Filme Removido com Sucesso')
    } else if (response === 'Filme não encontrado') {
      setMessage('Filme não encontrado')
    } else {
      setMessage('Erro ao remover o filme')
    }
  }

  function toggleConfirm() {
    setSwitchConfirm(!switchConfirm)
  }

  const handleCloseFull = () => {
    toggleConfirm()
    handleDelete()
    setBooleano(false)
    navigate('/admindashboard')
  }

  function RenderCorrectWindow() {
    return (
      <>
        {' '}
        {!booleano ? (
          <ModalConfirm handleClose={toggleConfirm} text={message} />
        ) : (
          <ModalConfirm handleClose={handleCloseFull} text={message} />
        )}
      </>
    )
  }

  return (
    <div style={styles.background}>
      <div style={styles.modal}>
        <div style={styles.titulo}>
          <IoCloseSharp size={48} cursor={'pointer'} onClick={handleDelete} />
        </div>
        <div style={styles.content}>
          <p style={styles.text}>Você certeza que deseja apagar o filme?</p>
        </div>
        <div style={styles.confirm} cursor={'pointer'} onClick={handleDeleteMovie}>
          <button style={styles.button_confirm}>Confirmar</button>
          {switchConfirm && <RenderCorrectWindow />}
        </div>
      </div>
    </div>
  )
}

export default ModalContentDelete
