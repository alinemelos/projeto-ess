import api from '../index'

export default async function DeletePlatform(filme_id, nome) {
  try {
    const data = {
      filme_id: filme_id,
      nome: nome
    }
    const response = await api.delete('/platform', { data })
    return response
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error === 'Movie not found') {
      return 'Movie not found'
    } else if (error.response && error.response.data && error.response.data.error === 'Platform not found') {
      return 'Platform not found'
    } else {
      return 'Error'
    }
  }
}
