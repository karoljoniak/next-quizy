import styles from './QuestionsForm.module.scss';
import Button from "../../../ui/button/Button";
import Answer from "./answer/Answer";
import AddQuizLogic from "../AddQuizLogic";
import TextArea from "../../../ui/text_area/TextArea";
import CheckBox from "../../../ui/checkbox/Checkbox";

const QuestionsForm = () => {
    const {questionNum, currentQuestion, addQuestion, addAnswer, onAnswerChange, onCheckboxChange,
        onDeleteClick, onMultiChoiceClick, onQuestionChange, saveQuiz} = AddQuizLogic();
    return (
        <div className={styles.main_content_wrapper}>
            <h3>Dodawanie quizu</h3>
            <div className={styles.new_question_panel}>
                <TextArea
                    handler={onQuestionChange}
                    label={`Pytanie ${questionNum}`}
                    name={`Pytanie ${questionNum}`}
                    placeholder={`Pytanie ${questionNum}`}
                    initialText={""}
                />

                <div className={styles.multi_choice}>
                    <CheckBox
                        handler={onMultiChoiceClick}
                        label={"Wielokrotny wybór"}
                        name={"multichoice"}
                        checked={currentQuestion.multipleChoice}
                    />
                </div>
                {
                    currentQuestion.answers.map(item =>
                        <Answer
                            key={item.id}
                            name={item.name}
                            onInputChange={onAnswerChange}
                            onCheckboxClick={onCheckboxChange}
                            onDeleteClick={onDeleteClick}
                            isCorrect={item.correct}
                            multiChoice={currentQuestion.multipleChoice}
                        />
                    )
                }
            </div>
            <div className={styles.buttons_container}>
                <Button onClick={addQuestion}>Poprzednie pytanie</Button>
                <Button onClick={addQuestion}>Dodaj pytanie</Button>
                <Button onClick={addAnswer}>Dodaj odpowiedź</Button>
                <Button onClick={saveQuiz}>Zapisz quiz</Button>
            </div>
        </div>
    )
}

export default QuestionsForm;