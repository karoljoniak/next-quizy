import styles from './Backdrop.module.scss'

const Backdrop = ({handleClick}) => {
    return (
        <div className={styles.backdrop} onClick={handleClick}/>
    )
}

export default Backdrop;