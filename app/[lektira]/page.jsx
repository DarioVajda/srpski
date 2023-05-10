import React from 'react'

import styles from './page.module.css';

import lektire from '../../components/lektire';

import Header from '@/components/skelet/header/Header';
import Sidebar from '@/components/skelet/sidebar/Sidebar';
import Footer from '@/components/skelet/footer/Footer';

export default function Page({ params }) {

  return (
    <div className={styles.wrapper}>
      <Header lektira={params.lektira} />
      <div>
        <Sidebar lektira={params.lektira} />
        <div>
          {
            lektire[params.lektira] && 
            lektire[params.lektira].sadrzaj && 
            lektire[params.lektira].sadrzaj.map((element, index) => (
              <div id={index}>{element.blok}</div>
            ))
          }
          <Footer lektira={params.lektira} />
        </div>
      </div>
    </div>
  );
}