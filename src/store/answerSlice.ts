import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuestion } from 'types/IQuestion';
import { IQuiz } from 'types/IQuiz';

/* Types */
interface IAnswerState {
    selectedQuizForAns?: IQuiz;
}

const initialState: IAnswerState = {
    selectedQuizForAns: undefined,
};

const answerSlice = createSlice({
    name: 'answer',
    initialState,
    reducers: {
        setQuizForAnswer(state, action: PayloadAction<IQuiz>) {
            state.selectedQuizForAns = action.payload;
        },
        updateQuestionForAns(state, action: PayloadAction<IQuestion>) {
            const updatedQuestions = state.selectedQuizForAns?.questions.map((question) => {
                if (question.id !== action.payload.id) return question;
                return action.payload;
            });
            if (state.selectedQuizForAns && updatedQuestions) {
                state.selectedQuizForAns.questions = updatedQuestions;
            }
        },
        resetAnswersData() {
            return initialState;
        },
    },
});

export default answerSlice.reducer;
export const { resetAnswersData, setQuizForAnswer, updateQuestionForAns } = answerSlice.actions;
