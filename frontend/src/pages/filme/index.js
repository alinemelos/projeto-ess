// src/pages/FilmDetail.js
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './styles'
import GetPage from '../../services/pages/GetPage'
import Post from '../../components/Post'
import { Button } from '@mui/material'
import ModalReview from '../../components/ModalReview'
import ModalPlatform from '../../components/ModalPlatform'
import Header from '../../components/ContentComponents/Header'

const FilmDetail = () => {
  const getRandomName = (names) => {
    const randomIndex = Math.floor(Math.random() * names.length)
    return names[randomIndex]
  }

  const { id } = useParams()
  const nomes = ['Breno Miranda', 'Livia Bion']
  const [user_id] = useState(getRandomName(nomes))
  const [page, setPage] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [reload, setReload] = useState(false)
  const [editingPostInfo, setEditingPostInfo] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [openModalPlatform, setOpenModalPlatform] = useState(false)
  const [publishComment, setPublishComment] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const response = await GetPage(id)
      setPage(response.data)
    }
    fetchData()
  }, [openModal, reload, publishComment])
  // Fetch the film details using the id, or use a state management solution.

  const handleOpenModal = () => {
    setIsEditing(false)
    setOpenModal(true)
  }

  const handleOpenModalPlatform = () => {
    setOpenModalPlatform(true)
  }

  const handleReplacePublishComment = () => {
    setPublishComment(!publishComment)
  }

  return (
    <div style={styles.bg}>
      <div style={styles.container}>
        <ModalReview
          isOpen={openModal}
          setModalOpen={() => {
            setOpenModal(!openModal)
          }}
          imageUrl={page.poster}
          user_id={user_id}
          filme_id={id}
          filme_ano={page.ano}
          filme_nome={page.nome}
          isEditing={isEditing}
          editingPostInfo={editingPostInfo}
          setIsEditing={() => {
            setIsEditing(!isEditing)
          }}
        />
        <ModalPlatform
          isOpen={openModalPlatform}
          selectedFilmId={id}
          setModalOpen={() => {
            setOpenModalPlatform(!openModalPlatform)
          }}
        />

        <div style={styles.content}>
          <Header user_id={user_id} />
          <div>
            <h1 style={styles.title}>{page.nome}</h1>
          </div>
          <div style={styles.info}>
            <img src={page.poster} alt='Poster do Filme' style={styles.image} />
            <div style={styles.detail}>
              <div style={styles.synopsis}>
                <h2>
                  <strong>Sinopse: </strong>
                </h2>
                <p>{page.sinopse}</p>
              </div>
              <div style={styles.information}>
                <p>
                  <b>Diretor:</b> {page.diretor}
                </p>
                <p>Ano de Lancamento: {page.ano}</p>
                <p>Genero: {page.genero}</p>
                <p>Duracao: {page.duracao} min</p>
                <Button variant='contained' style={{ backgroundColor: 'red', color: 'white' }} onClick={handleOpenModal}>
                  Poste um Review
                </Button>
                <Button variant='contained' color='primary' onClick={handleOpenModalPlatform}>
                  Onde Assistir?
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.forum}>
          <h3 style={styles.forum__title}>FÓRUM:</h3>
          {page.posts &&
            page.posts.map((post) => (
              <Post
                key={post.post_id}
                post={post}
                user_id={user_id}
                setModalOpen={() => {
                  setOpenModal(!openModal)
                }}
                setIsEditing={() => {
                  setEditingPostInfo(post)
                  setIsEditing(true)
                }}
                setReload={() => {
                  setReload(!reload)
                }}
                publishComment={handleReplacePublishComment}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default FilmDetail
