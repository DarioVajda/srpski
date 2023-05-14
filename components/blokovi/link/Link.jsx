import React from 'react'
import styles from './link.module.css'

const Link = (props) => {
  return (
    <a className={styles.link} href={props.href}>{props.tekst}</a>
  )
}

export default Link