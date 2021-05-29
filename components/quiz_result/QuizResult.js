import style from './QuizResult.module.scss'
import { useLocalStorage } from "../hooks/useLocalStorage";
import Question from "./question/Question";
import {useState} from "react";

const QuizResult = () => {

    let q;
    if (typeof window !== 'undefined') {
        q = JSON.parse(localStorage.getItem('quizToSolve'))
    }

    const [quiz, setQuiz] = useState(q);
    return (
        <div>
            {
                quiz ?
                    quiz.questions.map(question =>
                        <Question key={question.id} question={question} answers={question.answers}/>
                    )
                    :
                    null
            }
        </div>
    );
};

export default QuizResult;
