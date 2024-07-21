import React, { useState } from 'react'
import styles from './styles'
import { PiArrowBendDownLeftFill } from 'react-icons/pi'
import Commenting from '../Commenting'
import SettingsMenuComment from '../SettingMenuComment'

const Comment = ({ comment, user_id, publishComment, isNested = false }) => {
  const [showCommenting, setShowCommenting] = useState(false)
  const [editing, setEditing] = useState(false)

  const handleArrowClick = () => {
    setShowCommenting(!showCommenting)
  }

  const handleEditing = () => {
    setEditing(!editing)
  }

  return (
    <div className='comment' style={isNested ? styles.nestedComment : styles.comment}>
      <div style={editing ? styles.containerEditing : styles.container}>
        <div style={styles.comment__body}>
          <div>
            <p style={styles.comment__header}>{comment.user_id}</p>
            <p style={styles.comment__content}>{comment.comment}</p>
          </div>
          <div style={styles.comment__actions}>
            <div style={styles.comment__actions__options}>
              <span>
                <SettingsMenuComment
                  style={styles.menu}
                  comment={comment}
                  user_id={user_id}
                  fetchComment={publishComment}
                  editing={handleEditing}
                />
              </span>
              <span style={styles.arrow} onClick={handleArrowClick}>
                <PiArrowBendDownLeftFill />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={editing ? styles.dividerEditing : styles.none}>
        <Commenting
          response_id={comment.comment_id}
          user_id={user_id}
          publishComment={publishComment}
          publish={handleEditing}
          editing={true}
          isNested={isNested}
          comentario={comment.comment}
        />
      </div>
      {showCommenting && (
        <Commenting
          response_id={comment.comment_id}
          user_id={user_id}
          publishComment={publishComment}
          publish={handleArrowClick}
          isNested={isNested}
        />
      )}
      {comment.comments.length > 0 && (
        <div className='nested-comments' style={styles.nestedCommentContainer}>
          {comment.comments.map((nestedComment) => (
            <Comment
              key={nestedComment.comment_id}
              comment={nestedComment}
              user_id={user_id}
              publishComment={publishComment}
              isNested={true}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Comment
