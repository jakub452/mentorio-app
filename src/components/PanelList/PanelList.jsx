import { ChevronRight } from 'lucide-react'
import styles from './PanelList.module.css'


const PanelList = ({ tutor, onSelect, isActive }) => {


  return (
    <div className={`${isActive ? styles.active : ''}`}>
      <button className={styles.button} onClick={onSelect}>
        <div className={styles.left}>
          <img className={styles.icon} src={tutor.image} alt={`${tutor.name}'s photo`} />
          <div className={styles.info}>
            <p className={styles.name}>{tutor.name}</p>
            <p className={styles.major}>{`${tutor.major} - ${tutor.year} rok`}</p>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.price}>{`${tutor.price}zł/h`}</p>
          <ChevronRight size={30} />
        </div>
      </button>
    </div>
  )
}

export default PanelList