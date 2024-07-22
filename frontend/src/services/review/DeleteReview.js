import api from '../index'

export default async function DeleteReview(post_id, filme_id, review) {
  try {
    const data = {
      post_id: post_id,
      filme_id: filme_id,
      review: review
    }
    const response = await api.delete('/maintenance', data)
    return response
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error === 'Post not found.') {
      return 'Post not found.'
    } else {
      return 'Error'
    }
  }
}
