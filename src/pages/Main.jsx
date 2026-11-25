import { useState } from 'react'
import PanelList from '../components/PanelList/PanelList'
import { fakeApi } from '../data/fakeApi'
import styles from './Main.module.css'

const Main = () => {
  

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.panel}>
          {
            fakeApi.map(t => (
              <PanelList tutor={t}/>
            ))
          }
        </div>
        <div className={styles.panel}>

        </div>
      </div>
    </div>
  )
}

export default Main