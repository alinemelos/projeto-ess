import api from '../index'

export default async function CreateComment(user_id, response_id, comment) {
  try {
    const data = {
      user_id: user_id,
      response_id: response_id,
      comment: comment
    }
    const response = await api.post('/comment', data)
    return response
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error === 'Post or comment not found.') {
      return 'Não foi possível responder a review. Review não encontrada.'
    } else {
      return error
    }
  }
}
