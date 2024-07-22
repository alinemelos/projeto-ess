import React, { useState } from 'react'
import styles from './styles'
import CreateComment from '../../services/comment/CreateComment'
import UpdateComment from '../../services/comment/UpdateComment'

const Commenting = ({ response_id, user_id, publishComment, publish, editing = false, isNested = false, comentario = '' }) => {
  const [comment, setComment] = useState(editing ? comentario : '')

  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }

  const handlePublishClick = async () => {
    console.log(user_id, response_id, comment)
    await CreateComment(user_id, response_id, comment)
    setComment('')
    publishComment()
    publish()
  }

  const handlePutClick = async () => {
    console.log('Comentário ATUALIZADO:', response_id)
    const response = await UpdateComment(response_id, user_id, comment)
    console.log(response)
    setComment('')
    publishComment()
    publish()
  }

  return (
    <div className='commenting' style={styles.container}>
      <div style={isNested ? styles.form_nested : styles.form}>
        <textarea
          type='text'
          placeholder='Digite seu comentário...'
          style={styles.input}
          value={comment}
          onChange={handleCommentChange}
          rows={3}
        />
        {/* Modo de edição */}
        <div style={editing ? styles.buttons : styles.none}>
          <button style={styles.buttonPublish} onClick={publish}>
            CANCELAR
          </button>
          <button className='btn-put' onClick={handlePutClick} style={styles.buttonPublish}>
            ATUALIZAR
          </button>
        </div>
        {/* Modo publicação */}
        <div style={editing ? styles.none : styles.buttons}>
          <button className='btn-publish' onClick={handlePublishClick} style={styles.buttonPublish}>
            PUBLICAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default Commenting
