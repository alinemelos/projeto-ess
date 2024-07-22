import api from '../index'

export default async function DeleteMovie(filme_id) {
  try {
    const data = {
      filme_id: filme_id
    }
    const response = await api.delete('/movie', { data: data })
    console.log('Response Back')
    console.log(response)
    return response
  } catch (error) {
    if (error.response.status === 404) {
      return 'Filme não encontrado'
    } else {
      return 'Erro ao remover o filme'
    }
  }
}
