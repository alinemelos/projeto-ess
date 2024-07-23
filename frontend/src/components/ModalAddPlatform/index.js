import React, { useState } from 'react'
import styles from './styles'
import { IoCloseSharp } from 'react-icons/io5'
import createPlatform from '../../services/content/AddPlatform'
import { useParams } from 'react-router-dom'

const ModalAddPlatform = ({ isOpen, onClose }) => {
  const { id } = useParams()
  const [nome, setNome] = useState('')
  const [url, setUrl] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(id, nome, url, imageUrl)
    const result = await createPlatform(id, nome, url, imageUrl)

    if (
      result === 'Plataforma já cadastrada no sistema' ||
      result === 'O campo nome não foi preenchido' ||
      result === 'O campo logo não foi preenchido' ||
      result === 'Error'
    ) {
      setErrorMessage(result)
    } else {
      setNome('')
      setUrl('')
      setImageUrl('')
      setErrorMessage('')
      onClose()
    }
  }

  return (
    <div style={styles.background}>
      <div style={styles.modal} className='modal'>
        <div style={styles.exit}>
          <IoCloseSharp size={32} onClick={onClose} style={styles.exit__btn} />
        </div>
        <div style={styles.content}>
          <p style={styles.title__text}>Adicionar Plataforma</p>
          {errorMessage && (
            <p style={styles.errorText} data-testId='error'>
              {errorMessage}
            </p>
          )}
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>
              Nome:
              <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} style={styles.input} required data-testid='nome' />
            </label>
            <label style={styles.label}>
              URL:
              <input type='url' value={url} onChange={(e) => setUrl(e.target.value)} style={styles.input} required data-testid='url' />
            </label>
            <label style={styles.label}>
              URL da Imagem:
              <input
                type='url'
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                style={styles.input}
                required
                data-testid='img'
              />
            </label>
            <button type='submit' style={styles.submitButton}>
              Adicionar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalAddPlatform
