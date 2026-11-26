import { useEffect, useRef } from 'react'
import styles from './TutorRequest.module.css'

const TutorRequest = ({ requestVisible, setRequestVisible }) => {
    const ref = useRef(null)
    useEffect(() => {
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
                Form
            </div>
        </div>
    )
}

export default TutorRequest