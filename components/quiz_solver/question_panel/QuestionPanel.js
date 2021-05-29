import styles from './QuestionPanel.module.scss'
import Answer from "./answer/Answer"

const QuestionPanel = ({onClick, question}) => {

    return (
        <div className={styles.question_panel}>
            <h2>{question.content}</h2>
            <div className={styles.answers}>
                {
                    question.answers.map(ans =>
                        <Answer
                            id={ans.id}
                            key={ans.id}
                            multipleChoice={question.multipleChoice}
                            content={ans.content}
                            selected={ans.selected}
                            onClick={onClick}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default QuestionPanel;