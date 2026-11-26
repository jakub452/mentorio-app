import { useEffect, useRef } from 'react'
import styles from './TutorRequest.module.css'

const TutorRequest = ({ requestVisible, setRequestVisible }) => {
    const ref = useRef(null)
    useEffect(() => {
        const handleClick = e => {
            if (e.target != ref.current) {
                console.log(e)
                setRequestVisible(false)
            }
    }
        const handleKey = e => {
            if (e.key === 'Escape') {
                setRequestVisible(false)
            }
        }
        document.addEventListener('keydown', handleKey)
        document.addEventListener('mousedown', handleClick)
    }, [])

    if (!requestVisible) return
    return (
        <div ref={ref} className={styles.request}>TutorRequest</div>
    )
}

export default TutorRequest