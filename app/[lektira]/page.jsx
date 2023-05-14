"use client"

import React, { useState } from 'react'

import styles from './page.module.css';

import lektire from '../../components/lektire';

import Header from '@/components/skelet/header/Header';
import Sidebar from '@/components/skelet/sidebar/Sidebar';
import Footer from '@/components/skelet/footer/Footer';

import Paragraf from '@/components/blokovi/paragraf/Paragraf';
import Podnaslov from '@/components/blokovi/podnaslov/Podnaslov';
import YoutubeVideo from '@/components/blokovi/youtubeVideo/YoutubeVideo';
import Razmak from '@/components/blokovi/razmak/Razmak';
import Slika from '@/components/blokovi/slika/Slika';
import Pdf from '@/components/blokovi/pdf/Pdf';

function pickComponent(args){
  switch (args.blok) {
    case 'podnaslov':
      return <Podnaslov tekst={args.tekst}/>
    case 'paragraf':
      return <Paragraf tekst={args.tekst}/>
    case 'ytVideo':
      return <YoutubeVideo href={args.href}/>
    case 'slika':
      return <Slika putanja={args.putanja}/>
    case 'pdf':
      return <Pdf putanja={args.putanja}/>
    case 'razmak':
      return <Razmak/>
    default:
      return <div>{args.blok}</div>
  }
}

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
        <div className={styles.main}>
          {
            lektire[params.lektira] && 
            lektire[params.lektira].sadrzaj && 
            lektire[params.lektira].sadrzaj.map((element, index) => (
              // <div id={index}>{element.blok}</div>
              pickComponent(element)
            ))
          }
          <Footer lektira={params.lektira} />
        </div>
      </div>
    </div>
  );
}