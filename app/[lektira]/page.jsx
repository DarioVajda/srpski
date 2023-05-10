"use client"

import React, { useState } from 'react'

import styles from './page.module.css';

import lektire from '../../components/lektire';

import Header from '@/components/skelet/header/Header';
import Sidebar from '@/components/skelet/sidebar/Sidebar';
import Footer from '@/components/skelet/footer/Footer';

export default function Page({ params }) {

  const [ showingNavBar, setShowingNavBar ] = useState(false);

  const showNavBar = () => {
    setShowingNavBar(!showingNavBar)
  }

  return (
    <div className={styles.wrapper}>
      <Header lektira={params.lektira} showNavBar={showNavBar} />
      <div>
        <Sidebar lektira={params.lektira} showing={showNavBar} />
        <div>
          {
            lektire[params.lektira] && 
            lektire[params.lektira].sadrzaj && 
            lektire[params.lektira].sadrzaj.map((element, index) => (
              <div key={index}>{element.blok}</div>
            ))
          }
          <Footer lektira={params.lektira} />
        </div>
      </div>
    </div>
  );
}