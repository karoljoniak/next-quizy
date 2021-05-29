import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { quizAdded, currentQuizUpdated, questionAdded, currentQuizItemUpdated } from "../../../redux/quizzes/quizzesSlice";
import { useRouter } from "next/router";

const AddQuizLogic = () => {
    const router = useRouter()
    const dispatchQuiz = useDispatch()
    const dispatchQuestion = useDispatch()
    const dispatchCurrentQuiz = useDispatch()
    const dispatchCurrentQuizItem = useDispatch()
    const [questionNum, setQuestionNum] = useState(1)
    const currentQuiz = useSelector(state => state.quizzes.quizOnCreation)
    const initQuiz = {
        id: '',
        title: '',
        time: '',
        description: '',
        questions: []
    }
    const initQuestion = {
        id: '',
        question: '',
        multipleChoice: false,
        answers: [
            {id: nanoid(), name: "Odpowiedź 1", content: '', correct: false},
            {id: nanoid(), name: "Odpowiedź 2", content: '', correct: false},
        ]
    }
    const [currentQuestion, setCurrentQuestion] = useState(initQuestion)



    const setData = (name, value) => {
        dispatchCurrentQuizItem(currentQuizItemUpdated({name: name, value: value}))
    }

    const onAnswerChange = (name, value) => {
        const id = currentQuestion.answers.findIndex(x=>x.name===name)
        const newAnswers = currentQuestion.answers
        newAnswers[id].content = value
        setCurrentQuestion({
            ...currentQuestion,
            answers: newAnswers
        })

    }

    const onQuestionChange = (name, val) => {
        setCurrentQuestion({
            ...currentQuestion,
            question: val
        })
    }

    const onCheckboxChange = (name) => {
        const id = currentQuestion.answers.findIndex(x=>x.name===name)
        const newAnswers = currentQuestion.answers
        if(!currentQuestion.multipleChoice){
            for(let i = 0; i < newAnswers.length; i++)
                newAnswers[i].correct = false;
        }
        newAnswers[id].correct = !newAnswers[id].correct;
        setCurrentQuestion({
            ...currentQuestion,
            answers: newAnswers
        })
    }

    const onDeleteClick = (name) => {
        if(currentQuestion.answers.length === 2) return;
        const id = currentQuestion.answers.findIndex(x=>x.name===name)
        const newAnswers = currentQuestion.answers
        newAnswers.splice(id, 1)
        for(let i = id; i < newAnswers.length; i++)
            newAnswers[i].name = `Odpowiedź ${i+1}`
        setCurrentQuestion({
            ...currentQuestion,
            answers: newAnswers
        })
    }

    const onMultiChoiceClick = () => {
        const val = currentQuestion.multipleChoice
        setCurrentQuestion({
            ...currentQuestion,
            multipleChoice: !val
        })
    }

    const addAnswer = () => {
        const newAnswers = currentQuestion.answers
        const len = currentQuestion.answers.length + 1
        newAnswers.push({id: nanoid(), name: `Odpowiedź ${len}`, content: '', correct: false})
        setCurrentQuestion({
            ...currentQuestion,
            answers: newAnswers
        })
    }

    const addQuestion = () => {
        const newQuestion = {...currentQuestion}
        newQuestion.id = nanoid()
        dispatchQuestion(questionAdded(newQuestion));
        setQuestionNum(questionNum+1);
        setCurrentQuestion(initQuestion)
    }

    const saveQuiz = () => {
        dispatchQuiz(quizAdded(currentQuiz))
        dispatchCurrentQuiz(currentQuizUpdated(initQuiz))
        router.push('/quizy')
    }

    const onSaveTitleHandler = () => {
        dispatchCurrentQuizItem(currentQuizItemUpdated({name: "id", value: nanoid()}))
        router.push('/dodaj-quiz/pytania')
    }

    return {questionNum, currentQuestion, setData, addQuestion, addAnswer, onAnswerChange, onCheckboxChange, onDeleteClick,
        onMultiChoiceClick, onQuestionChange, saveQuiz, onSaveTitleHandler};
}
export default AddQuizLogic