"use client"

import React from 'react'
import styles from './sidebar.module.css'

import Link from 'next/link'

import lektire from '@/components/lektire'

const Sidebar = ({ lektira, showing }) => {
  return (
    <div className={`${styles.sidebar} ${showing?styles.opened:''}`}>
      <div><a href='/'><div className={styles.naslov}>Aleksandar Slavov</div></a></div> {/*Ovo je promenjeno u a jer inace se iz nekog razloga font pokvari, nemam pojma kako popraviti*/}
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
                <a key={i} href={`${lektira}#${element.tekst}`}>
                  <div className={styles.podnaslov} >
                    {element.tekst}
                  </div>
                </a>
              ) : null)
            }
          </div>
        ))
      }
    </div>
  )
}

export default Sidebar