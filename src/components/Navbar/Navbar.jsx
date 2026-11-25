import React, { useState } from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo/mentorio-logo-ciemne-tlo.svg'
import { User } from 'lucide-react'
import { useNavigate } from 'react-router'
import Hamburger from '../Hamburger/Hamburger'

const Navbar = ({ pages }) => {
    const navigate = useNavigate()
    const [hidden, setHidden] = useState(true)
    return (
        <div className={styles.navbar}>
            <div className={styles.wrapper}>
                <img src={logo} alt="webside logo" className={styles.logo} onClick={() => {navigate("/")}}/>
                <div className={styles.user}>
                    <User size={40} onClick={() => setHidden(!hidden)}/>
                    <Hamburger pages={pages} hidden={hidden}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar