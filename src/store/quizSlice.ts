import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuiz } from 'types/IQuiz';

/* Types */
interface IQuizState {
    isLoading: boolean;
    data: IQuiz[];
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
        resetAll() {
            return initialState;
        },
    },
});

export default quizSlice.reducer;
export const { initWithDummyData, resetAll } = quizSlice.actions;
