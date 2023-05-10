import React from 'react'

import styles from './page.module.css';

import lektire from '../../components/lektire';

import Header from '@/components/skelet/header/Header';
import Sidebar from '@/components/skelet/sidebar/Sidebar';
import Footer from '@/components/skelet/footer/Footer';

import Paragraf from '@/components/blokovi/paragraf/Paragraf';
import Podnaslov from '@/components/blokovi/podnaslov/Podnaslov';
import YoutubeVideo from '@/components/blokovi/youtubeVideo/YoutubeVideo';

function pickComponent(args){
  switch (args.blok) {
    case 'podnaslov':
      return <Podnaslov tekst={args.tekst}/>
      break;
    case 'paragraf':
      return <Paragraf tekst={args.tekst}/>
      break;
    case 'ytVideo':
      return <YoutubeVideo href={args.href}/>
      break;
    default:
      return <div>{args.blok}</div>
      break;
  }
}

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