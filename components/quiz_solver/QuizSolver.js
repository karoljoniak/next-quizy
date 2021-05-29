import styles from './QuizSolver.module.scss'
import QuestionPanel from "./question_panel/QuestionPanel";
import { useState, useEffect } from "react";
import Button from "../ui/button/Button";
import { useRouter } from "next/router";

const QuizSolver = () => {
    let q;
    if (typeof window !== 'undefined') {
        q = JSON.parse(localStorage.getItem('quizToSolve'))
    }
    const router = useRouter()
    const [quiz, setQuiz] = useState(q);
    const [currQuestion, setCurrQuestion] = useState(0)
    const [alert, setAlert] = useState(false)
    const [time, setTime] = useState({
        seconds: `${q?q.time.slice(3, 5):''}`,
        minutes: `${q?q.time.slice(0, 2):''}`
    })

    setTimeout(function(){
        if(time.seconds > 0){
            setTime({
                ...time,
                seconds: time.seconds-1
            })
        }else{
            setTime({
                minutes: time.minutes-1,
                seconds: 59
            })
        }

    }, 1000);

    const onAnswerClick = (ansId) => {
        const newData = {...quiz};
        const question = newData.questions[currQuestion];
        const id = question.answers.findIndex(ans => ans.id === ansId);
        const selected = question.answers[id].selected;
        const multi = question.multipleChoice;
        if(!multi){
            const len = question.answers.length;
            for(let i = 0; i < len; i++){
                question.answers[i].selected = false;
            }
        }
        newData.questions[currQuestion].answers[id].selected = !selected;
        setQuiz(newData);
        localStorage.setItem('quizToSolve', JSON.stringify(quiz));
    }

    const isOptionSelected = () => {
        const ans = quiz.questions[currQuestion].answers
        for(let i = 0; i < ans.length; i++)
            if(ans[i].selected)
                return true;

        return false
    }

    const onNextQuestionClick = () => {
        const flag = isOptionSelected()
        if(flag) {
            setCurrQuestion(currQuestion + 1)
            setAlert(false)
        }else{
            setAlert(true)
        }
    }

    const onQuizEnd = () => {
        const flag = isOptionSelected()
        if(flag){
            setAlert(false)
            router.push('/result')
        }else{
            setAlert(true)
        }
    }

    return (
        <div className={styles.solver}>
            {
                quiz ?
                    <>
                        <div className={styles.info}>
                            <h4>Czas: {time.minutes}:{time.seconds < 10 ? '0' : ''}{time.seconds}</h4>
                            <h4>Pytanie {currQuestion+1} z {quiz.questions.length}</h4>
                        </div>
                        <QuestionPanel onClick={onAnswerClick} question={quiz.questions[currQuestion]}/>
                        <Button
                            onClick={currQuestion+1 === quiz.questions.length ?
                            onQuizEnd
                            :
                            onNextQuestionClick}
                        >
                            {currQuestion+1 === quiz.questions.length ?
                            'Zakończ quiz'
                            :
                            'Następne pytanie'}
                        </Button>
                        <p className={`${styles.alert_show} ${!alert ? styles.alert_hidden : ''}`}>Musisz zaznaczyć przynajmniej jedną odpowiedź</p>
                    </>
                    :
                    null
            }

        </div>
    );
};

export default QuizSolver;