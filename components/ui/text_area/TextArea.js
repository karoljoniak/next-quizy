import styles from './TextArea.module.scss'
import {useState} from "react";

const TextArea = ({handler, label, name, placeholder, initialText}) => {
    const [text, setText] = useState(initialText);
    const [rerenderFlag, setRerenderFlag] = useState(label);

    const handleChange = (e) => {
        const { value, name } = e.target;
        handler(name, value);
        setText(value);

    }

    const forceRerender = () => {
        setRerenderFlag(label);
        setText(initialText);
    }

    return (
        <div className={styles.main_wrapper}>
            <label
                className={styles.label}
                htmlFor=""
            >
                {label}
            </label>
            {
                rerenderFlag === label ?
                    <textarea
                        placeholder={placeholder}
                        name={name}
                        onChange={handleChange}
                        value={text}
                        className={text.length > 0 ? styles.textarea : styles.empty_textarea}
                    />
                    :
                    forceRerender()
            }

        </div>
    )
}

export default TextArea;