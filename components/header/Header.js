import styles from './Header.module.scss'
import Link from 'next/link';
import Burger from "../ui/burger/Burger";
import SlideMenu from "./slide_menu/SlideMenu";
import Backdrop from "../backdrop/Backdrop";
import {useState} from "react";
import Logo from '../../assets/svg/choose.svg'

const Header = () => {

    const [open, setOpen] = useState(false);
    const handleOpenCloseMenu = (val) => {
        setOpen(val);
    }

    return(
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Link href={"/"} >
                        <a><Logo/></a>
                    </Link>
                </div>

                <div className={styles.menu}>
                    <Link href={"/quizy"} >
                        <a className={styles.link}>Quizy</a>
                    </Link>
                    <Link href={"/dodaj-quiz"} >
                        <a className={styles.link}>Dodaj quiz</a>
                    </Link>
                    <Link href={"/logowanie"} >
                        <a className={styles.link}>Zaloguj</a>
                    </Link>
                </div>
                <div className={styles.burger}>
                    <Burger handleClick={() => {handleOpenCloseMenu(true)}}/>
                </div>
                {
                    open ?
                            <Backdrop handleClick={() => {handleOpenCloseMenu(false)}}/>
                        :
                        null
                }
            </div>

            <SlideMenu open={open}/>
        </div>
    )
}

export default Header;