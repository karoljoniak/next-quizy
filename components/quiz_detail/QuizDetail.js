import styles from './QuizDetail.module.scss'
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Button from "../ui/button/Button";
import { useState, useEffect } from "react";

const QuizDetail = () => {
    const router = useRouter()
    const [id, setId] = useState(router.query.id)
    const quiz = useSelector(state => state.quizzes.quizzes.find(quiz => quiz.id === id))

    useEffect(() => {
        setId(router.query.id)
    }, [router.query.id])

    const onSolveClick = () => {
        router.push(`/quizy/${id}/${quiz.questions[0].id}`)
    }

    const renderContent = () => {
        return (
            <>
                <h1 className={styles.title}>{quiz.title}</h1>
                <p className={styles.time}>{`Czas na rozwązanie: ${quiz.time}`}</p>
                <p>Opis quizu:</p>
                <p>{quiz.description}</p>
                <Button onClick={onSolveClick}>Rozwiąż quiz</Button>
            </>

        )
    }
    return (
        <div className={styles.quiz_main_wrapper}>
            {
                quiz === undefined ?
                    null
                    :
                    renderContent()
            }
        </div>
    )
}

export default QuizDetail;