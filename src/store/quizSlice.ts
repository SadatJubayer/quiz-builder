import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuestion } from 'types/IQuestion';
import { IQuiz } from 'types/IQuiz';

/* Types */
interface IQuizState {
    isLoading: boolean;
    data: IQuiz[];
    selectedQuiz?: IQuiz;
    selectedQuestion?: IQuestion;
}

const initialState: IQuizState = {
    isLoading: true,
    data: [],
};

const quizSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        initWithDummyData(state, action: PayloadAction<IQuiz[]>) {
            state.isLoading = false;
            state.data = action.payload;
        },
        setSelectedQuiz(state, action: PayloadAction<IQuiz>) {
            state.selectedQuiz = action.payload;
            /* Selecting first question by default */
            state.selectedQuestion = action.payload.questions[0];
        },
        setSelectedQuestion(state, action: PayloadAction<IQuestion>) {
            state.selectedQuestion = action.payload;
        },
        deSelectQuiz(state) {
            state.selectedQuiz = undefined;
            state.selectedQuestion = undefined;
        },
        resetAll() {
            return initialState;
        },
    },
});

export default quizSlice.reducer;
export const { initWithDummyData, setSelectedQuiz, setSelectedQuestion, deSelectQuiz, resetAll } =
    quizSlice.actions;
