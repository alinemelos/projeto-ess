// src/pages/FilmDetail.js
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './styles'
import GetPage from '../../services/pages/GetPage'
import Post from '../../components/Post'
import { Button, Rating } from '@mui/material'
import ModalReview from '../../components/ModalReview'
import ModalPlatform from '../../components/ModalPlatform'
import Header from '../../components/ContentComponents/Header'
import StarIcon from '@mui/icons-material/Star'

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
  const [mediaNota, setMediaNota] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const response = await GetPage(id)
      setPage(response.data)
    }
    fetchData()
  }, [openModal, reload, publishComment])
  // Fetch the film details using the id, or use a state management solution.
  useEffect(() => {
    let notas = 0
    if (page.posts) {
      for (let i = 0; i < page.posts.length; i++) {
        notas += page.posts[i].nota
      }
      setMediaNota(notas / page.posts.length)
    }
  }, [page])

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
          <div style={styles.head}>
            <h1 data-testid='title' style={styles.title}>
              {page.nome}
            </h1>
            <Rating
              size='large'
              name='simple-controlled'
              value={mediaNota}
              onChange={(_, value) => {
                setMediaNota(value)
              }}
              precision={0.25}
              readOnly
              emptyIcon={<StarIcon style={{ color: '#D9D9D9' }} />}
              icon={<StarIcon style={{ color: '#FF182C' }} />}
            />
          </div>
          <div style={styles.info}>
            <img src={page.poster} alt='Poster do Filme' style={styles.image} />
            <div style={styles.detail}>
              <div style={styles.synopsisandinfo}>
                <div className='synopsis' style={styles.synopsis}>
                  <h2 style={styles.titlesbegin}> Sinopse: </h2>
                  <p>{page.sinopse}</p>
                </div>
                <div className='information' style={styles.information}>
                  <p style={styles.minordetail}>
                    <p style={styles.titlesbegin}>Diretor:</p>
                    <p>{page.diretor}</p>
                  </p>
                  <p style={styles.minordetail}>
                    <p style={styles.titlesbegin}>Ano de Lancamento:</p>
                    <p>{page.ano}</p>
                  </p>
                  <p style={styles.minordetail}>
                    <p style={styles.titlesbegin}>Genero:</p>
                    <p> {page.genero}</p>
                  </p>
                  <p style={styles.minordetail}>
                    <p style={styles.titlesbegin}>Duracao:</p>
                    <p> {page.duracao} min</p>
                  </p>
                </div>
              </div>
              <p style={styles.butons}>
                <Button variant='contained' style={{ backgroundColor: 'red', color: 'white' }} onClick={handleOpenModal}>
                  Poste um Review
                </Button>
                <Button variant='contained' color='primary' onClick={handleOpenModalPlatform}>
                  Onde Assistir?
                </Button>
              </p>
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
