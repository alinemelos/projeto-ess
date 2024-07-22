import api from '../index'

export default async function UpdateReview(post_id, filme_id, review) {
  try {
    const data = {
      post_id: post_id,
      filme_id: filme_id,
      review: review
    }
    const response = await api.put('/maintenance', data)
    return response
  } catch (error) {
    console.error(error)
  }
}
