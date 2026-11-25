import React from 'react'
import { useNavigate } from 'react-router'
import styles from './Hamburger.module.css'
const Hamburger = ({ pages, hidden }) => {

    const navigate = useNavigate()

    if (hidden) {
        return
    }
    return (
        <div className={styles.hamburger}>
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