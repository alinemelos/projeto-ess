import api from '../index'

export default async function DeleteComment(response_id, user_id) {
  try {
    const data = {
      user_id: user_id,
      response_id: response_id
    }
    const response = await api.delete('/comment', { data: data })
    return response
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error === 'Post or comment not found') {
      return 'Post not found.'
    } else if (error.response && error.response.data && error.response.data.error === 'Comment not found or user not authorized') {
      return 'Comment not found or user not authorized.'
    } else {
      return 'Error'
    }
  }
}
