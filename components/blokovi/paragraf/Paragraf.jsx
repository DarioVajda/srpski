import React from 'react'
import styles from './paragraf.module.css'

const Paragraf = (props) => {
  return (
    <p className={styles.paragraf}>{props.tekst}</p>
  )
}

export default Paragraf