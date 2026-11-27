import { useEffect, useRef } from 'react'
import styles from './TutorRequest.module.css'
import Calendar from '../Calendar/Calendar'
import { Send } from 'lucide-react'

const TutorRequest = ({ requestVisible, setRequestVisible, tutor }) => {
    const ref = useRef(null)
    useEffect(() => {
        console.log(tutor)
        const handleClick = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                setRequestVisible(false)
            }
        }
        const handleKey = e => {
            if (e.key === 'Escape') {
                setRequestVisible(false)
            }
        }
        document.addEventListener('keydown', handleKey)
        document.addEventListener('mouseup', handleClick)
    }, [])

    if (!requestVisible) return
    return (
        <div className={styles.request}>
            <div ref={ref} className={styles.requestCard}>
                <form action="" method='post' className={styles.form}>
                    <h2 className={styles.title}>Poproś o spotkanie</h2>
                    <p className={styles.subTitle}>Pola * są obowiązkowe</p>
                    <div className={styles.formInfo}>
                        <div className={styles.left}>
                            <img className={styles.icon} src={tutor.image} alt={`${tutor.name}'s image`} />
                            <p className={styles.name}>{tutor.name}</p>
                            <p>{`${tutor.price}zł/h`}</p>
                        </div>
                        <div className={styles.right}>
                            <p className={styles.majorTitle}>Przedmiot:</p>
                            <p className={styles.major}>{tutor.major}</p>
                        </div>
                    </div>

                    <div className={styles.calendar}>
                        <p className={styles.calendarTitle}>Termin:</p>
                        <Calendar />
                    </div>

                    <div className={styles.inputs}>
                        <div className={styles.top}>
                            <fieldset className={styles.fieldset}>
                                <legend>Forma zajęć *</legend>
                                <label><input type="radio" name="mode" id="mode" value={'online'} defaultChecked />Online</label>
                                <label><input type="radio" name="mode" id="mode" value={'irl'} />Stacjonarnie</label>
                            </fieldset>


                            <div className={styles.time}>
                                <label htmlFor="time">Czas trwania: *</label>
                                <select name="time" id="time" required defaultValue='60'>
                                    <option value="45">45 min</option>
                                    <option value="60">60 min</option>
                                    <option value="90">90 min</option>
                                </select>
                            </div>




                        </div>

                        <div className={styles.bottom}>
                            <div className={styles.textareaContainer}>
                                <label htmlFor="description">Z czym potrzebujesz pomocy? *</label>
                            <textarea name="description" id="description" className={styles.textarea}></textarea>
                            </div>
                            <button className={styles.submit} type="submit">  Wyślij <Send size={24}/></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TutorRequest