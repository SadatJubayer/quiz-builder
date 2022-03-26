import { getDefaultChoice } from 'data/defaultChoice';
import { getDefaultQuestion } from 'data/defaultQuestion';
import { addChoice, addQuestion } from 'store/quizSlice';
import { useAppDispatch } from './useAppDispatch';
import { useQuizzes } from './useQuizzes';

export const useQuizAdd = () => {
    const dispatch = useAppDispatch();
    const { selectedQuiz, selectedQuestion } = useQuizzes();

    const addAQuestion = () => {
        if (selectedQuiz) {
            const newQuestion = getDefaultQuestion(selectedQuiz.questions.length + 1);
            dispatch(addQuestion(newQuestion));
        }
    };
    const addAChoice = () => {
        if (selectedQuestion) {
            const newChoice = getDefaultChoice(String(selectedQuestion?.choices.length + 1));
            dispatch(addChoice(newChoice));
        }
    };

    return { addAQuestion, addAChoice };
};
