ovde ubacujemo komponente kao sto su neki naslov, slika, paragraf itd
ovo ce se koristiti kao osnova onog sastavljanja kao "lego kocke".
svaka komponenta se nalazi u folder blokovi i tu pisem strukturu fajlova:
    - imeKomponente (folder)
        - ImeKomponente.jsx (ovde se nalazi komponenta *)
        - imeKomponente.module.css (ovde se nalazi css za istu komponentu)


* jsx je isto sto i js samo je praksa da se tu pise kod kad koristis react i taj html u js-u. 
Evo boiler-plate sto mozes da pejstujes u svaki jsx fajl:

import React from 'react'
import styles from './imeKomponente.module.css'

const ImeKomponente = () => {
  return (
    // ovo sa klasom ne mora da bude tu ali sam napisao da pokazem kako se koristi css koji napises u .module.css fajl
    <div className={styles.imeCssKlase}>sadrzaj</div>
  )
}

export default ImeKomponente