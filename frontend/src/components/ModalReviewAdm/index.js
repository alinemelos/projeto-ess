import React, { useEffect, useState } from 'react'
import { Rating } from '@mui/material'
import styles from './styles'
import CreatePost from '../../services/posts/CreatePost'
import UpdateReview from '../../services/posts/UpdatePost'
import { IoCloseSharp } from 'react-icons/io5'
import StarIcon from '@mui/icons-material/Star'

const ModalReviewAdm = ({
  isOpen,
  setModalOpen,
  imageUrl,
  user_id,
  filme_id,
  filme_nome,
  filme_ano,
  isEditing,
  setIsEditing,
  editingPostInfo
}) => {
  const [postText, setPostText] = useState('')
  const [errorNota, setErrorNota] = useState(false)
  const [rating, setRating] = useState(null)

  const handleCreatePost = async () => {
    if (isEditing) {
      const response = await UpdateReview(editingPostInfo.post_id, editingPostInfo.user_id, editingPostInfo.filme_id, rating, postText)
      if (response.status === 200) {
        setPostText('')
        setRating(null)
        setIsEditing()
        setModalOpen()
      } else if (response === 'Nota is required.') {
        setErrorNota(true)
      } else {
        alert('Erro ao enviar review')
      }
    } else {
      const response = await CreatePost(user_id, filme_id, rating, postText)
      if (response.status === 201) {
        setPostText('')
        setRating(null)
        setModalOpen(false)
      } else if (response === 'Nota is required.') {
        setErrorNota(true)
      } else {
        alert('Erro ao enviar review')
      }
    }
  }

  useEffect(() => {
    setErrorNota(false)
    setPostText('')
    setRating(null)
    if (isEditing) {
      setPostText(editingPostInfo.review)
      setRating(editingPostInfo.nota)
    }
  }, [isOpen, isEditing, editingPostInfo])

  if (isOpen) {
    return (
      <div style={styles.background}>
        <div style={styles.modal} className='modaladm'>
          <div style={styles.cotainer}>
            <div style={styles.exit} data-testid='exit-button'>
              <IoCloseSharp size={32} onClick={setModalOpen} style={styles.exit__btn} />
            </div>
            <div style={styles.body}>
              <div style={styles.image}>
                <img src={imageUrl} alt='Modal Image' style={styles.imageContent} />
              </div>
              <div style={styles.content}>
                <div style={styles.title}>
                  <p style={styles.title__text}>Eu assisti...</p>
                  <div style={styles.title__movie}>
                    <p style={styles.title__movie_name}>{filme_nome}</p>
                    <p style={styles.title__movie_year}>{filme_ano}</p>
                  </div>
                </div>
                <div style={styles.form}>
                  <textarea
                    type='text'
                    placeholder='Escreva aqui sua review...'
                    style={styles.textarea}
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    rows={12}
                  />
                  <div style={styles.form__bottom}>
                    <div style={styles.form__bottom__nota}>
                      <p style={styles.form__bottom__nota_label}>Nota</p>
                      {errorNota && <p style={styles.form__bottom__nota_error}>Nota é obrigatória</p>}
                      <Rating
                        name='simple-controlled'
                        value={rating}
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ color: '#D9D9D9' }} />}
                        icon={<StarIcon style={{ color: '#FF182C' }} />}
                        readOnly={isEditing} // Somente leitura quando estiver editando
                        data-testid='rating-component'
                      />
                    </div>
                    <button style={styles.button} onClick={handleCreatePost}>
                      ENVIAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return null
}

export default ModalReviewAdm
