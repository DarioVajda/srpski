import React from 'react'
import styles from './footer.module.css'

const Footer = ({ lektira }) => {
  return (
    <div className={styles.footer}>
      <span>prof. Aleksandar Slavov</span>
      <span>kontakt telefon: +381642389987</span>
      <span>email: slovoslavovs@gmail.com</span>
      <span>
        Stranicu napravila i dizajnirala tri učenika 4.it (2019-2023), najboljeg odeljenja u istoriji subotičke gimnazije (po našem skromnom mišljenju :)) -{' '}
        <a target="_blank" href="https://instagram.com/dario_vajda">Dario Vajda</a>, <a target="_blank" href="https://instagram.com/coa_204">Aleksandar Rašković</a> i <a target="_blank" href="https://instagram.com/ognjentesic_">Ognjen Tešić</a>.
      </span>
    </div>
  )
}

export default Footer
