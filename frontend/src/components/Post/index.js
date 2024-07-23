import React, { useState, useEffect } from 'react'
import Comment from '../Comment'
import styles from './styles'
import { Rating } from '@mui/material'
import { PiArrowBendDownLeftFill } from 'react-icons/pi'
import StarIcon from '@mui/icons-material/Star'
import SettingsMenu from '../SettingsMenu'
import Commenting from '../Commenting'

const Post = ({ post, user_id, setModalOpen, setIsEditing, setReload, publishComment }) => {
  const [nota, setNota] = useState(post.nota)
  const [showCommenting, setShowCommenting] = useState(false)
  const [user] = useState(user_id)

  useEffect(() => {
    setNota(post.nota)
  }, [post.nota])

  const handleArrowClick = () => {
    setShowCommenting(!showCommenting)
  }

  return (
    <div className='post' style={styles.container}>
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
        <div data-testid='arrow' style={styles.post__footer_arrow} onClick={handleArrowClick}>
          <PiArrowBendDownLeftFill />
        </div>

        {showCommenting && (
          <Commenting response_id={post.post_id} user_id={user} publishComment={publishComment} publish={handleArrowClick} />
        )}
        {post.comments.length > 0 &&
          post.comments.map((comment) => (
            <Comment key={comment.comment_id} comment={comment} user_id={user} publishComment={publishComment} />
          ))}
      </div>
    </div>
  )
}

export default Post
