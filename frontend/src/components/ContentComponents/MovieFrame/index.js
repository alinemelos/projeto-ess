import React from 'react'
import styles from './styles'
import { CiCirclePlus } from 'react-icons/ci'

const MovieFrame = ({ onClick, type }) => {
  return (
    <div style={styles.rectangle}>
      <div data-testid={type}>
        <CiCirclePlus size={120} cursor={'pointer'} onClick={onClick} style={styles.circle} />
      </div>
    </div>
  )
}

export default MovieFrame
