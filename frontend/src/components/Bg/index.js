import React, { useState, useEffect } from 'react'
import styles from './styles'

const Bg = () => {
  const [gradients, setGradients] = useState([])

  useEffect(() => {
    const handleResize = () => {
      // const vh = window.innerHeight
      // const numGradients = Math.floor(vh / 300) // Number of gradients needed for the viewport height
      const numGradients = 1 // Number of gradients needed for the viewport height
      const newGradients = []

      for (let i = 0; i < numGradients; i++) {
        const topOffset = i * 150 // 100vh height distance between gradients
        newGradients.push({
          id: i * 2,
          top: `${5 + topOffset}%`,
          left: '75%'
        })
        newGradients.push({
          id: i * 2 + 1,
          top: `${55 + topOffset}%`,
          left: '-5%'
        })
      }

      setGradients(newGradients)
    }

    handleResize() // Initial calculation
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={styles.gradient}>
      {gradients.map((gradient) => (
        <span
          key={gradient.id}
          style={{
            ...styles.gradient__element,
            top: gradient.top,
            left: gradient.left
          }}
        />
      ))}
    </div>
  )
}

export default Bg
