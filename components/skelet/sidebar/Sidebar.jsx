import React from 'react'
import styles from './sidebar.module.css'

import Link from 'next/link'

import lektire from '@/components/lektire'

const Sidebar = ({ lektira, showing }) => {
  return (
    <div className={styles.sidebar}>
      <Link href='/'><div className={styles.naslov}>Aleksandar Slavov</div></Link>
      {
        Object.keys(lektire).map((key, index) => (
          <div key={index}>
            <Link href={key}>
              <div className={styles.naslov} >
                „{lektire[key].naslov}”
              </div>
            </Link>
            {
              key === lektira &&
              lektire[key].sadrzaj.map((element, i) => element.blok === 'podnaslov' ? (
                <div key={i} className={styles.podnaslov} >
                  {element.tekst}
                </div>
              ) : null)
            }
          </div>
        ))
      }
    </div>
  )
}

export default Sidebar