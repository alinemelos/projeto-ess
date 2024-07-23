import api from '../index'

export default async function createPlatform(filme_id, nome, url, image) {
  try {
    const platform = {
      filme_id: filme_id,
      nome: nome,
      url: url,
      image: image
    }
    console.log('oisajdioasjd')
    console.log(platform)
    const response = await api.post('/platform', platform)
    return response
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error === 'Platform already exists') {
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
