import styles from './Navigation.module.css'
import Context from "../../../Context.jsx";
import {useContext} from "react";
import {Link} from "react-router-dom";
function Navigation() {

    const {selectedPage, setSelectedPage} = useContext(Context)

    return (
        <div className={styles.navigation}>
            <Link to={'/'} onClick={() => setSelectedPage('about')}>
                <span className={selectedPage === 'about' ? styles.active : ''}>About</span>
            </Link>
            <Link to={'portfolio'} onClick={() => setSelectedPage('portfolio')}>
                <span className={selectedPage === 'portfolio' ? styles.active : ''}>Portfolio</span>
            </Link>
            <Link to={'contact'} onClick={() => setSelectedPage('contact')}>
                <span className={selectedPage === 'contact' ? styles.active : ''}>Contact</span>
            </Link>
        </div>
    )
}

export default Navigation