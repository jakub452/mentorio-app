import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import styles from './Hamburger.module.css'
const Hamburger = ({ pages, isVisible, setIsVisible }) => {
    const ref = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        const handleClick = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsVisible(false)
            }
        }
        const handleKey = e => {
            if (e.key === 'Escape') {
                setIsVisible(false)
            }
        }
        document.addEventListener('keydown', handleKey)
        document.addEventListener('mouseup', handleClick)
    }, [])

    if (!isVisible) {
        return
    }
    return (
        <div className={styles.hamburger} ref={ref}>
            {
                Object.keys(pages).map(name => (
                    <button className={styles.hamburgerButton} key={name} onClick={() => navigate(name)}>
                        {name}
                    </button>
                ))
            }
        </div>
    )
}

export default Hamburger