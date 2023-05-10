"use client"

import React from 'react'

import styles from './header.module.css'

const Header = ({ lektira, showNavBar }) => {

  let wh =`${1}${'em'}`

  const onClick = () => {
    showNavBar();
  }

  return (
    <div className={styles.header}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={wh}
        height={wh}
        preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 24 24"
        onClick={onClick}
      >
        <path fill="currentColor" d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 6.032a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm1 5.032a1 1 0 1 0 0 2h18a1 1 0 0 0 0-2H3Z"/>
      </svg>
      <span>Analiza lektire, Aleksandar Slavov</span>
    </div>
  )
}

export default Header