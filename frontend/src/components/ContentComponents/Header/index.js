import React, { useState } from 'react'
import styles from './styles' // Certifique-se de importar corretamente os estilos
import { CiSearch } from 'react-icons/ci'
import { BsPersonCircle } from 'react-icons/bs'
import SearchFilmes from '../../../services/search/Search' // Importe a função de busca
import GetFilmes from '../../../services/filmes/GetFilmes'
import { useNavigate } from 'react-router-dom'

const Header = ({ topRightName, retornar_filmes }) => {
  const navigate = useNavigate()
  const [busca, setBusca] = useState('')

  const handleInputChange = (event) => {
    setBusca(event.target.value)
  }

  const handleMoveToDashboard = () => {
    console.log(topRightName)
    if (topRightName == 'ADM') {
      navigate('/admindashboard')
    } else {
      navigate('/userdashboard')
    }
  }

  const handleSubmit = async () => {
    try {
      let result = []

      if (busca === '') {
        result = await GetFilmes()
      } else {
        result = await SearchFilmes(busca) // Chama a função de busca com o valor atual de busca
      }

      retornar_filmes(result.data)
      console.log('Resultados da busca:', result.data)
    } catch (error) {
      console.error('Erro na busca:', error)
      retornar_filmes(404)
    }
  }

  return (
    <div style={styles.background}>
      <div style={styles.title}>
        <p style={styles.fonte_titulo}>CINNEMA</p>
      </div>
      <div style={styles.options}>
        <p style={styles.about}>SOBRE</p>
        <p style={styles.about} onClick={handleMoveToDashboard}>
          FILMES
        </p>
        <div style={styles.search}>
          <CiSearch type='submit' id='entrar-busca' value='Buscar' onClick={handleSubmit} />
          <input
            style={styles.input_name}
            type='text'
            id='busca'
            name='nome-filme'
            placeholder='Nome do Filme'
            value={busca}
            onChange={handleInputChange}
            onKeyDown={handleSubmit}
          />
        </div>
        <div style={styles.user}>
          <BsPersonCircle style={styles.profile} />
          <p style={styles.user_name}>{topRightName}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
