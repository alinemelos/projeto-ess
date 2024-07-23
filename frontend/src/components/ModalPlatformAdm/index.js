import React, { useEffect, useState } from 'react'
import styles from './styles'
import GetFilmes from '../../services/filmes/GetFilmes'
import { IoCloseSharp, IoAddCircleOutline } from 'react-icons/io5'
import DeletePlatform from '../../services/content/DeletePlatform'
import ModalAddPlatform from '../ModalAddPlatform'

const ModalPlatform = ({ isOpen, setModalOpen, selectedFilmId }) => {
  if (!isOpen) return null

  const [filmes, setFilmes] = React.useState([])
  const [selectedFilm, setSelectedFilm] = React.useState(null)
  const [isAddModalOpen, setAddModalOpen] = useState(false)

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

  const handleRemovePlatform = async (filme_id, nome) => {
    const response = await DeletePlatform(filme_id, nome)
    if (response.status === 200) {
      setSelectedFilm((prev) => ({
        ...prev,
        plataformas: prev.plataformas.filter((plataforma) => plataforma.nome !== nome)
      }))
    } else {
      console.error('Failed to remove platform:', response)
    }
  }

  const handleAddPlatform = () => {
    setAddModalOpen(true)
  }

  const handleAddModalClose = () => {
    setAddModalOpen(false)
  }

  return (
    <>
      <div style={styles.background}>
        <div style={styles.modal}>
          <div style={styles.exit}>
            <IoCloseSharp size={32} onClick={() => setModalOpen(false)} style={styles.exit__btn} />
          </div>
          <div style={styles.content}>
            <p style={styles.title__text}>Disponível em:</p>
            <div style={styles.platforms}>
              {selectedFilm?.plataformas?.map((plataforma) => (
                <div key={plataforma.filme1_id} style={styles.platformContainer}>
                  <a href={plataforma.url} target='_blank' rel='noopener noreferrer' style={styles.platform}>
                    <img src={plataforma.image} alt={plataforma.nome} style={styles.platformImage} />
                    <span>{plataforma.nome}</span>
                  </a>
                  <IoCloseSharp size={24} style={styles.removeIcon} onClick={() => handleRemovePlatform(selectedFilmId, plataforma.nome)} />
                </div>
              ))}
              <div style={styles.addPlatformContainer} onClick={handleAddPlatform}>
                <div style={styles.addPlatformIcon}>
                  <IoAddCircleOutline size={48} />
                </div>
                <span style={styles.addPlatformText}>Adicionar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isAddModalOpen && <ModalAddPlatform isOpen={isAddModalOpen} onClose={handleAddModalClose} />}
    </>
  )
}

export default ModalPlatform
