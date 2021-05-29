import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    quizzes: [
        {
            id: 't-6O-y7maqTWrazQxY9fX',
            title: 'Zaliczenie z przedmiotu Nowoczesne Techniki programowania',
            time: '12:12',
            description: 'E universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile…',
            questions: [
                {
                    id: 'i0asdafnTJeG9B56bBn5A',
                    question: 'Co oznacza skrót HTML?',
                    multipleChoice: true,
                    answers: [
                        {
                            id: 'i0k-rchnTJeG9B56bBn5A',
                            name: 'Odpowiedź 1',
                            content: 'Hipertext markap languacz',
                            correct: true
                        },
                        {
                            id: 'Tw8YD-8Z1pFgbRrt3CHVa',
                            name: 'Odpowiedź 2',
                            content: 'Hypertext markup language',
                            correct: true
                        },
                        {
                            id: 'ymyce2FIvKb8Sk23GBNd7',
                            name: 'Odpowiedź 3',
                            content: 'Hiper text markup language',
                            correct: false
                        }
                    ]
                },
                {
                    id: 'i0asdseG9B5v26bBn5A',
                    question: 'adsad',
                    multipleChoice: false,
                    answers: [
                        {
                            id: 'OZC0O-ADTwL-mfIHRqyXD',
                            name: 'Odpowiedź 1',
                            content: 'ss',
                            correct: true
                        },
                        {
                            id: 'ihn26P792PYTW6uWKOXOB',
                            name: 'Odpowiedź 2',
                            content: 'd',
                            correct: false
                        }
                    ]
                }
            ]
        }
    ],
    quizOnCreation: {
        id: '',
        title: '',
        time: '',
        description: '',
        questions: []
    },
    quizOnSolve: {
        id: '',
        title: '',
        time: '',
        description: '',
        questions: []
    }
}

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        quizAdded(state, action) {
            state.quizzes.push(action.payload)
        },
        currentQuizUpdated(state, action) {
            state.quizOnCreation = action.payload
        },
        currentQuizItemUpdated(state, action) {
            state.quizOnCreation[action.payload.name] = action.payload.value
        },
        questionAdded(state, action) {
            state.quizOnCreation.questions.push(action.payload)
        },
        quizOnSolveUpdated(state, action) {
            state.quizOnSolve = state.quizzes.find(quizz => quizz.id === action.payload)
        }
    }
})

export const { quizAdded, currentQuizUpdated, questionAdded, currentQuizItemUpdated, quizOnSolveUpdated } = quizzesSlice.actions
export default quizzesSlice.reducer