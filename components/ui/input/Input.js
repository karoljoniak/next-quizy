import styles from './Input.module.scss'
import {useState} from "react";


const Input = ({handler, label, fill,  ...otherProps}) => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        const { value, name } = e.target;
        handler(name, value);
        setText(value);
    }

    return (
        <div className={styles.main_wrapper}>
            <label
                className={styles.label}
                htmlFor=""
            >
                {label}
            </label>
            <input
                onChange={handleChange}
                className={text.length > 0 ? styles.input :  fill === 'fill' ? styles.fill : styles.empty_input}
                type={otherProps.type}
                name={otherProps.name}
                placeholder={otherProps.placeholder}
            />
        </div>
    )
}

export default Input;