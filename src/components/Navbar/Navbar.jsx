import React, { useState } from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo/mentorio-logo-ciemne-tlo.svg'
import { User } from 'lucide-react'
import { useNavigate } from 'react-router'
import Hamburger from '../Hamburger/Hamburger'

const Navbar = ({ pages }) => {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div className={styles.navbar}>
            <div className={styles.wrapper}>
                <img src={logo} alt="webside logo" className={styles.logo} onClick={() => {navigate("/")}}/>
                <div className={styles.user}>
                    <User className={styles.icon} size={40} onClick={() => setIsVisible(true)}/>
                    <Hamburger pages={pages} isVisible={isVisible} setIsVisible={setIsVisible}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar