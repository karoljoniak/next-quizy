import styles from './Answer.module.scss';
import Input from "../../../../ui/input/Input";
import Delete from '../../../../../assets/svg/delete.svg';

const Answer = ({onCheckboxClick, onInputChange, onDeleteClick, ...otherProps}) => {


    return (
        <div className={styles.question}>
            <input
                onClick={()=>{onCheckboxClick(otherProps.name)}}
                readOnly
                checked={otherProps.isCorrect}
                className={styles.checkbox}
                type={`${otherProps.multiChoice ? 'checkbox' : 'radio'}`}
            />

            <Input
                handler={onInputChange}
                label={otherProps.name}
                type='text'
                name={otherProps.name}
                placeholder={otherProps.name}/>
            <div className={styles.icon} onClick={() => {onDeleteClick(otherProps.name)}}>
                <Delete/>
            </div>
        </div>
    )
}

export default Answer