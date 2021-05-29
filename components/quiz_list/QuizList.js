import styles from './QuizList.module.scss'
import Quiz from "./quiz/Quiz";
import { useSelector } from "react-redux";

const QuizList = () => {
    const quizzes = useSelector(state => state.quizzes.quizzes)
    return (
        <div>
            {
                quizzes.map(quiz =>
                    <Quiz key={quiz.id} data={quiz}/>
                )
            }
        </div>
    )
}

export default QuizList;