import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import styles from './styles' // Import the styles from the same directory

const Login = () => {
  const navigate = useNavigate()

  const HandleAdminLogin = () => {
    navigate('/admindashboard')
  }

  const HandleUserLogin = () => {
    navigate('/userdashboard')
  }

  return (
    <div style={styles.bg}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>Login</h1>
          <div style={styles.buttons}>
            <Button variant='contained' style={styles.button} onClick={HandleAdminLogin}>
              Admin Login
            </Button>
            <Button variant='contained' style={styles.button} onClick={HandleUserLogin}>
              User Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
