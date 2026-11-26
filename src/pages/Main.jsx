import { useState } from 'react'
import PanelList from '../components/PanelList/PanelList'
import { fakeApi } from '../data/fakeApi'
import styles from './Main.module.css'
import DetailsPanel from '../components/DetailsPanel/DetailsPanel'

const Main = () => {

  const [filter, setFilter] = useState("Wszystko");
  const [selected, setSelected] = useState(null)
  
  const majors = [...new Set(fakeApi.map(t => t.major))].sort()
  const filteredFakeApi = filter === "Wszystko" ? fakeApi : fakeApi.filter(t => t.major === filter)

  const tutor = filteredFakeApi.find(t => t.id === selected) ?? filteredFakeApi.at(0)

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.panel}>
          <div className={styles.filter}>
            <p>Przemiot:</p>
            <select className={styles.filterInput} name="filter" id="filter" value={filter} onChange={e => setFilter(e.target.value)}>
              <option value="Wszystko">Wszystkie</option>
              {
                majors.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))
              }
            </select>
          </div>
          {
            filteredFakeApi.map(t => (
              <PanelList key={t.id} tutor={t} onSelect={() => setSelected(t.id)} isActive={t.id === tutor.id}/>
            ))
          }
        </div>
        <div className={styles.panel}>
          <DetailsPanel tutor={tutor}/>
        </div>
      </div>
    </div>
  )
}

export default Main