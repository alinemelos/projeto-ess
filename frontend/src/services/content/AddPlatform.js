import api from '../index'

export default async function AddPlatform(nome, logo) {
  try {
    const data = {
      nome: nome,
      url: 'Placeholder',
      logo: logo
    }
    const response = await api.post('/platform', data)
    return response
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error === 'Plataforma já cadastrada no sistema') {
      return 'Plataforma já cadastrada no sistema'
    } else if (error.response && error.response.data && error.response.data.error === 'O campo nome não foi preenchido') {
      return 'O campo nome não foi preenchido'
    } else if (error.response && error.response.data && error.response.data.error === 'O campo logo não foi preenchido') {
      return 'O campo logo não foi preenchido'
    } else {
      return 'Error'
    }
  }
}
