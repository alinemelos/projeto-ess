import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { HiDotsVertical } from 'react-icons/hi'
import styles from './styles'
import DeleteComment from '../../services/comment/DeleteComment'

export default function SettingsMenuComment({ comment, user_id, fetchComment, editing }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const see = Boolean(user_id == comment.user_id)

  const handleClick = (event) => {
    if (comment.user_id == user_id) {
      setAnchorEl(event.currentTarget)
    }
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleDeletar = async () => {
    console.log('Comentário deletado:', comment.comment_id)
    const response = await DeleteComment(comment.comment_id, user_id)
    fetchComment()
    if (response.status === 200) {
      setAnchorEl(null)
    }
  }
  const handleEditar = () => {
    editing()
    setAnchorEl(null)
  }

  return (
    <div>
      <div style={see ? styles.settings__menu : styles.settings__menu__hidden}>
        <Button
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          style={styles.settings__menu__button}
        >
          <HiDotsVertical />
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
        >
          <MenuItem className='edit-comment' onClick={handleEditar}>
            Editar
          </MenuItem>
          <MenuItem className='delete-comment' onClick={handleDeletar}>
            Deletar
          </MenuItem>
        </Menu>
      </div>
    </div>
  )
}
