import React from 'react'
import styles from './styles'

const Prompt = ({ handleClose, setPostImage }) => {
  return (
    <div style={styles.background}>
      <div style={styles.modal}>
        <div style={styles.content}>
          <input
            style={styles.input_url}
            type='text'
            placeholder='Url Filme'
            onChange={(e) => setPostImage(e.target.value)}
            data-testid='prompt-url'
          />
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

export default Prompt
