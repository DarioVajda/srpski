import React from 'react'
import styles from './podnaslov.module.css'

const Podnaslov = (props) => {
  return (
    <h2 className={styles.podnaslov}>{props.tekst}</h2>
  )
}

export default Podnaslov