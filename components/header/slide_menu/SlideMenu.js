import styles from './SlideMenu.module.scss'
import Link from 'next/link'

const SlideMenu = ({open}) => {
    return(
        <div className={`${styles.menu} ${ !open ? styles.menuClose : ''} `}>
            <h3 className={styles.header}>MENU GŁÓWNE</h3>
            <div className={styles.items}>
                <Link href={"/quizy"} >
                    <a className={styles.item}>Wszystkie quizy</a>
                </Link>
                <Link href={"/dodaj-quiz"} >
                    <a className={styles.item}>Dodaj quiz</a>
                </Link>
                <Link href={"/logowanie"} >
                    <a className={styles.item}>Zaloguj</a>
                </Link>
            </div>


        </div>
    )
}

export default SlideMenu;