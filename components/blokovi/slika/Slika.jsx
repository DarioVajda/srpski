import React from 'react'
import Image from 'next/image'
import styles from './slika.module.css'

const Slika = (props) => {
  return (
    <img className={styles.slika}
    src={props.putanja}/>
  )
}

export default Slika