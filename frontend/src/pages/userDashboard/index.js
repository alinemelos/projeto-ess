import React, { useState } from 'react'
import styles from './styles'
import ModalContentAdd from '../../components/ContentComponents/ModalContentAdd'
import UserCarouselMovies from '../../components/ContentComponents/UserCarouselMovies'
import Header from '../../components/ContentComponents/Header'

const AdminDashboard = () => {
  const [showContent, setShowContent] = useState(false)
  function handleContent() {
    setShowContent(!showContent)
  }
  function ModalAddMovie(props) {
    return <>{props.showContent && <ModalContentAdd showContent={showContent} handleContent={handleContent} />}</>
  }
  return (
    <div style={styles.background}>
      <Header user_id={'Usuário'} />
      <div>
        <UserCarouselMovies handleContent={handleContent} showMovieFrame={false} />
        {showContent && <ModalAddMovie showContent={showContent} />}
      </div>
    </div>
  )
}

export default AdminDashboard
