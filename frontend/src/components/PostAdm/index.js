import React, { useState, useEffect } from 'react'
import CommentAdm from '../CommentAdm'
import styles from './styles'
import { Rating } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import SettingsMenu from '../MenuAdm'

const Post = ({ post, user_id, setModalOpen, setIsEditing, setReload }) => {
  const [nota, setNota] = useState(post.nota)

  useEffect(() => {
    setNota(post.nota)
  }, [post.nota])

  return (
    <div className='postadm' style={styles.container}>
      <div style={styles.post__header}>
        <div style={styles.post__header__data}>
          <p style={styles.post__header__data_userID}>{post.user_id}</p>
          <Rating
            name='simple-controlled'
            value={nota}
            onChange={(_, value) => {
              setNota(value)
            }}
            precision={0.5}
            readOnly
            emptyIcon={<StarIcon style={{ color: '#D9D9D9' }} />}
            icon={<StarIcon style={{ color: '#FF182C' }} />}
          />
        </div>
        <div style={styles.post__header__options} data-testid='settings-menu'>
          <SettingsMenu post={post} user_id={user_id} setModalOpen={setModalOpen} setIsEditing={setIsEditing} setReload={setReload} />
        </div>
      </div>
      <div style={styles.post__body}>
        <p style={styles.post__body__content_review}>{post.review}</p>
      </div>
      <div style={styles.post__footer}>
        <div style={styles.post__footer_arrow}></div>
        {post.comments.length > 0 && post.comments.map((comment) => <CommentAdm key={comment.comment_id} comment={comment} />)}
      </div>
    </div>
  )
}

export default Post
