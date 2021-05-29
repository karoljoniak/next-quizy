import styles from './Question.module.scss'

const Question = ({question, answers}) => {
    let all_correct = 0, correctly_answered = 0, score;
    for(let i = 0; i < answers.length; i++){
        if(answers[i].correct) all_correct++;
        if(answers[i].selected && answers[i].correct) correctly_answered++;
        score = correctly_answered / all_correct;
    }
    return (
        <div className={styles.question}>
            <h3>{question.content}</h3>
            <ul className={styles.list}>
                {
                    answers.map(answer =>{
                        return (
                                <div key={answer.id} className={styles.answer}>
                                    <input className={styles.input} readOnly checked={answer.selected} type={`${question.multipleChoice ? 'checkbox' : 'radio'}`}/>
                                    <li
                                        className={`${answer.correct ? styles.green : styles.red}`}
                                    >
                                        {answer.content}
                                    </li>
                                </div>
                                )
                        }
                    )
                }
            </ul>

            <p>Punkty: {score}</p>
        </div>
    );
};

export default Question;
