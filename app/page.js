"use client"

import React, { useState } from 'react'

import styles from './[lektira]/page.module.css';

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

export default function Page({ }) {

  const home = {
    
  }

  const [ showingNavBar, setShowingNavBar ] = useState(false);

  const showNavBar = () => {
    console.log(!showingNavBar);
    setShowingNavBar(!showingNavBar);
  }

  return (
    <div className={styles.wrapper}>
      <Header lektira={'home'} showNavBar={showNavBar} />
      <div>
        <Sidebar lektira={'home'} showing={showingNavBar} />
        <div className={styles.main}>
          {
            home.map((element, index) => (
              // <div id={index}>{element.blok}</div>
              <div key={index}>{pickComponent(element)}</div>
            ))
          }
          <Footer lektira={'home'} />
        </div>
      </div>
    </div>
  );
}