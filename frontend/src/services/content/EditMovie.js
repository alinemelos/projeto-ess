import api from '../index'

export default async function EditMovie(filme_id, poster, nome, diretor, ano, duracao, sinopse, genero) {
  try {
    const data = {
      filme_id: filme_id,
      poster: poster,
      nome: nome,
      diretor: diretor,
      ano: ano,
      duracao: duracao,
      sinopse: sinopse,
      genero: genero
    }
    const response = await api.put('/movie', data)
    return response
  } catch (error) {
    // console.log(error.response)
    // console.log(error.response.data)
    // console.log(error.response.data.error)
    if (error.response && error.response.data && error.response.data.error === 'Filme não encontrado') {
      return 'Filme não encontrado'
    } else if (error.response.data.error === 'Nenhum campo para atualizar') {
      return 'Nenhum campo para atualizar'
    } else {
      return 'Error'
    }
  }
}
