import styles from './Answer.module.scss'

const Answer = ({id, onClick, content, multipleChoice, selected}) => {

    return (
        <div className={styles.answer_container} onClick={()=>{onClick(id)}}>
            <input readOnly checked={selected} type={`${multipleChoice ? 'checkbox' : 'radio'}`}/>
            <p>{content}</p>
        </div>
    );
};

export default Answer;
