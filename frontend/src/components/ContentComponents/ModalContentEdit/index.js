import React, { useState, useEffect } from 'react'
import styles from './styles'
import { IoCloseSharp } from 'react-icons/io5'
import EditMovie from '../../../services/content/EditMovie'
import GetFilmes from '../../../services/filmes/GetFilmes'
import ModalConfirm from '../ModalConfirm'

const ModalContentEdit = ({ handleContent, id }) => {
  const [postName, setPostName] = useState('')
  const [postYear, setPostYear] = useState('')
  const [postDuration, setPostDuration] = useState('')
  const [postGenre, setPostGenre] = useState('')
  const [postSynopsis, setPostSynopsis] = useState('')
  const [postImage, setPostImage] = useState('')
  const [switchImage, setSwitchImage] = useState(false)

  const [switchConfirm, setSwitchConfirm] = useState(false)
  const [message, setMessage] = useState('')

  const handleEditMovie = async () => {
    toggleConfirm()
    const response = await EditMovie(id, postImage, postName, postYear, postDuration, postSynopsis, postGenre)
    if (response.status === 200) {
      setMessage('Filme Editado com Sucesso')
    } else if (response == 'Nenhum campo para atualizar') {
      setMessage('Nenhum campo para atualizar')
    } else if (response.status == 404) {
      alert('Filme não encontrado')
    } else {
      alert('Erro ao editar filme')
      setMessage('Erro ao editar o filme')
    }
  }

  useEffect(() => {
    const handleGetMovie = async (id) => {
      const response = await GetFilmes()
      const filmes = response.data
      if (response.status === 200) {
        const filme = filmes.filter((filme) => filme.filme_id === id)
        setPostName(filme[0].nome)
        setPostYear(filme[0].ano)
        setPostDuration(filme[0].duracao)
        setPostGenre(filme[0].genero)
        setPostSynopsis(filme[0].sinopse)
        setPostImage(filme[0].poster)
        setSwitchImage(true)
      } else {
        alert('Erro ao editar filme')
      }
    }
    handleGetMovie(id)
  }, [id])

  const handleSwitchImage = async () => {
    let text
    text = prompt('Coloque a URL da imagem do poster do filme: ')
    if (text) {
      setSwitchImage(!switchImage)
      setPostImage(text)
    }
  }

  function toggleImage(props) {
    return (
      <>
        {' '}
        {!props.switchImage ? (
          <img src={postImage} alt='Poster do Filme' style={styles.poster_img} onClick={handleSwitchImage} />
        ) : (
          <img src={postImage} alt='Poster do Filme' style={styles.poster_img} onClick={handleSwitchImage} />
        )}
      </>
    )
  }

  function toggleConfirm() {
    setSwitchConfirm(!switchConfirm)
  }

  const handleClose = () => {
    toggleConfirm()
    handleContent()
  }

  return (
    <div style={styles.background}>
      <div style={styles.modal}>
        <div style={styles.titulo}>
          <p style={styles.fonte_titulo}>Editar Filme:</p>
          <IoCloseSharp size={48} cursor={'pointer'} onClick={handleContent} />
        </div>
        <div style={styles.content}>
          {toggleImage({ switchImage })}
          <div style={styles.form}>
            <div style={styles.info}>
              <input
                style={styles.input_name}
                type='text'
                placeholder='Nome do Filme'
                value={postName}
                onChange={(e) => setPostName(e.target.value)}
              />
              <input
                style={styles.input_year}
                type='text'
                placeholder='Ano'
                value={postYear}
                onChange={(e) => setPostYear(e.target.value)}
              />
              <input
                style={styles.input_duration}
                type='text'
                placeholder='Duração'
                value={postDuration}
                onChange={(e) => setPostDuration(e.target.value)}
              />
              <input
                style={styles.input_genre}
                type='text'
                placeholder='Gênero'
                value={postGenre}
                onChange={(e) => setPostGenre(e.target.value)}
              />
            </div>
            <textarea
              type='text'
              placeholder='Adicionar sinopse...'
              style={styles.sinopse_textarea}
              value={postSynopsis}
              onChange={(e) => setPostSynopsis(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div style={styles.confirm} onClick={handleEditMovie}>
          <button style={styles.button_confirm}> Confirmar </button>
        </div>
        {switchConfirm && <ModalConfirm handleClose={handleClose} toggleConfirm={toggleConfirm} text={message} />}
      </div>
    </div>
  )
}

export default ModalContentEdit
