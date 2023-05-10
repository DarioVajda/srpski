import React from 'react'
import styles from './sidebar.module.css'

const Sidebar = () => {
  return (
    // ovo sa klasom ne mora da bude tu ali sam napisao da pokazem kako se koristi css koji napises u .module.css fajl
    <div className={styles.sidebar}>
      sadrzaj
    </div>
  )
}

export default Sidebar