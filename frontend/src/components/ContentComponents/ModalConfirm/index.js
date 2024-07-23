import React from 'react'
import styles from './styles'
import { IoCloseSharp } from 'react-icons/io5'

const ModalConfirm = ({ handleClose, text, confirm_message }) => {
  return (
    <div style={styles.background}>
      <div style={styles.modal}>
        <div style={styles.titulo}>
          <IoCloseSharp size={48} cursor={'pointer'} onClick={handleClose} />
        </div>
        <div style={styles.content}>
          <p style={styles.text} data-testid={confirm_message}>
            {text}
          </p>
        </div>
        <div style={styles.confirm} cursor={'pointer'} onClick={handleClose}>
          <button style={styles.button_confirm} data-testid={'botao_confirmar'}>
            {' '}
            Confirmar{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalConfirm
