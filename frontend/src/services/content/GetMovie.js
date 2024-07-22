import api from '../index'

export default async function GetMovie(filme_id) {
  try {
    const dados = {
      filme_id: filme_id
    }
    const response = await api.get('/movie', { dados })
    return response
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error === 'Filme não encontrado') {
      return 'Filme não encontrado'
    } else {
      return 'Error'
    }
  }
}
