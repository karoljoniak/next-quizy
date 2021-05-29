import styles from './CheckBox.module.scss'

const CheckBox = ( { handler, label, name, checked } ) => {
    return (
        <div className={styles.checkBox}>
            <input onClick={handler} className={styles.input} type="checkbox" checked={checked} id={name} name={name}/>
            <label className={styles.label} htmlFor={name}>{label}</label>
        </div>
    )
}
export default CheckBox;