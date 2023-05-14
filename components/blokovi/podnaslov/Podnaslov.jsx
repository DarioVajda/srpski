import React from 'react'
import styles from './podnaslov.module.css'

const Podnaslov = (props) => {
  return (
    <h2 className={styles.podnaslov} id={props.tekst}>{props.tekst}</h2>
  )
}

export default Podnaslov