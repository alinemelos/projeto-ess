import api from '../index'

export default async function UpdateComment(comment_id, user_id, new_comment) {
  try {
    const data = {
      user_id: user_id,
      comment_id: comment_id,
      comment: new_comment
    }
    const response = await api.put('/comment', data)
    return response
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error === 'Invalid request parameters') {
      return 'Invalid request parameters'
    } else if (error.response && error.response.data && error.response.data.error === 'Comment not found or user not authorized') {
      return 'Comment not found or user not authorized'
    } else {
      return 'Error'
    }
  }
}
