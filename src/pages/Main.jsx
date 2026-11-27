import { useState } from 'react'
import PanelList from '../components/PanelList/PanelList'
import { fakeApi as list } from '../api/fakeApi'
import styles from './Main.module.css'
import DetailsPanel from '../components/DetailsPanel/DetailsPanel'


const Main = () => {

  const [filter, setFilter] = useState("Wszystko");
  const [selected, setSelected] = useState()

  const options = [...new Set(list.map(t => t.major))].sort()
  // ['Chemia', 'Fizyka', 'Informatyka', 'Matematyka']

  const filteredList = filter === "Wszystko" ? list : list.filter(i => i.major === filter)  
  const tutor = filteredList.find(t => t.id === selected) ?? filteredList.at(0)

  return (
    <div className={styles.main}>

      <div className={styles.wrapper}>
        <div className={styles.panel}>
          <div className={styles.filter}>
            <p>Przemiot:</p>
            <select className={styles.filterInput} name="filter" id="filter" value={filter} onChange={e => setFilter(e.target.value)}>
              <option value="Wszystko">Wszystkie</option>
              {
                options.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))
              }
            </select>
          </div>
          {
            filteredList.map(t => (
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