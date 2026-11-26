import { Mail } from 'lucide-react'
import Calendar from '../Calendar/Calendar'
import styles from './DetailsPanel.module.css'

const DetailsPanel = ({ tutor, onClick }) => {
    return (
        <div className={styles.info}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <img className={styles.icon} src={tutor?.image} alt={`${tutor.name}'s image`} />
                    <div className={styles.infoText}>
                        <p className={styles.name}>{tutor.name}</p>
                        <p className={styles.major}>{`${tutor.major} - ${tutor.year} rok`}</p>
                    </div>
                </div>
                <div className={styles.infoPrice}>
                    <p className={styles.price}>{`${tutor.price}zł/h`}</p>
                </div>
            </div>
            <div className={styles.main}>
                <p className={styles.description}>{`"${tutor.description}"`}</p>
                <Calendar />
            </div>
            <div className={styles.footer}>
                <button className={styles.submit} onClick={onClick}>
                    <Mail size={23} /> Poproś o spotkanie
                </button>
            </div>
        </div>
    )
}

export default DetailsPanel