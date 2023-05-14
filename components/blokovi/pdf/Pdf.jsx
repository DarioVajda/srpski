import React from 'react'
import styles from './pdf.module.css'

const Pdf = (props) => {
  return (
    <object className={styles.pdf} data={props.putanja} type="application/pdf" >
      <p>Nije moguce prikazati pdf. <a href={props.putanja}>Preuzmi ovde</a></p>
    </object>
  )
}

export default Pdf