import styles from './Quiz.module.scss'
import { useRouter } from "next/router";
import {useSelector} from "react-redux";

const Quiz = ({data}) => {
    const router = useRouter()
    const quizToSolve = useSelector(state => state.quizzes.quizzes.find(quizz => quizz.id === data.id))

    const parseQuizForSolving = () => {
        return {
            id: quizToSolve.id,
            time: quizToSolve.time,
            currentQuestion: 0,
            questions: quizToSolve.questions.map(question => ({
                id: question.id,
                multipleChoice: question.multipleChoice,
                content: question.question,
                answers: question.answers.map(ans => ({
                    id: ans.id,
                    content: ans.content,
                    correct: ans.correct,
                    selected: false
                }))
            }))
        }
    }

    const handleClick = () => {
        const quiz = parseQuizForSolving(quizToSolve)
        localStorage.setItem('quizToSolve', JSON.stringify(quiz))
        router.push(`/quizy/${data.id}`)
    }
    return (
        <div className={styles.quiz} onClick={handleClick}>
            <p className={styles.title}>{data.title}</p>
        </div>
    )
}

export default Quiz;