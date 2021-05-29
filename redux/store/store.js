import { configureStore } from "@reduxjs/toolkit";

import quizzesReducer from "../quizzes/quizzesSlice";

export default configureStore({
    reducer: {
        quizzes: quizzesReducer
    }
})