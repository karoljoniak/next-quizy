import styles from './Layout.module.scss'
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header/>
            <section className={styles.content}>
                {children}
            </section>
            <Footer/>
        </div>
    )
}
export default Layout;