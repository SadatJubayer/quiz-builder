import { getDefaultQuestion } from 'data/defaultQuestion';
import { useQuizEditor } from './useQuizEditor';
import { useQuizzes } from './useQuizzes';

export const useQuizRemover = () => {
    const { updateQuizQuestions } = useQuizEditor();
    const { selectedQuiz, selectQuestion } = useQuizzes();

    const removeQuestionById = (questionId: number) => {
        const filtered = selectedQuiz?.questions.filter((ques) => ques.id !== questionId);
        if (filtered) updateQuizQuestions(filtered);

        /* selecting previous question */
        const index = selectedQuiz?.questions.findIndex((ques) => ques.id === questionId);
        if (index && index > 0 && selectedQuiz?.questions[index - 1]) {
            selectQuestion(selectedQuiz?.questions[index - 1]);
        } else {
            selectQuestion(getDefaultQuestion(0));
        }
    };

    return { removeQuestionById };
};
