import React, { useEffect } from 'react'
import styles from './styles'
import GetFilmes from '../../services/filmes/GetFilmes'
import { IoCloseSharp } from 'react-icons/io5'

const ModalPlatform = ({ isOpen, setModalOpen, selectedFilmId }) => {
  if (!isOpen) return null

  const [filmes, setFilmes] = React.useState([])
  const [selectedFilm, setSelectedFilm] = React.useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await GetFilmes()
      setFilmes(response.data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (filmes.length > 0) {
      const film = filmes.find((f) => f.filme_id === selectedFilmId)
      setSelectedFilm(film)
    }
  }, [filmes, selectedFilmId])

  return (
    <div style={styles.background}>
      <div style={styles.modal}>
        <div style={styles.titulo}>
          <IoCloseSharp size={32} onClick={() => setModalOpen(false)} style={styles.exit__btn} />
        </div>
        <div style={styles.content}>
          <p style={styles.text}>Disponível em:</p>
          <div style={styles.platforms}>
            {selectedFilm?.plataformas?.map((plataforma) => (
              <a key={plataforma.filme1_id} href={plataforma.url} target='_blank' rel='noopener noreferrer' style={styles.platform}>
                <img src={plataforma.image} alt={plataforma.nome} style={styles.platformImage} />
                <span>{plataforma.nome}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalPlatform
