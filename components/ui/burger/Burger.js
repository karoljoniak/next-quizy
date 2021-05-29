import styles from './Burger.module.scss'

const Burger = ({handleClick}) => {
    return (
        <div className={styles.button} onClick={handleClick}>
            <div className={styles.burger}/>
        </div>

    )
}

export default Burger