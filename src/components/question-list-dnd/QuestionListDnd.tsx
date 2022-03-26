/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { DragIcon } from 'assets/icons';
import cn from 'classnames';
import { strings } from 'constant/strings';
import { useQuizzes } from 'hooks/useQuizzes';
import { IQuestion } from 'types/IQuestion';

export const QuestionListDnd = () => {
    const { selectedQuiz, selectedQuestion, selectQuestion } = useQuizzes();

    const onQuestionClick = (question: IQuestion) => {
        selectQuestion(question);
    };

    return (
        <div>
            <ul className="[min-width:200px] mt-5 md:mt-0">
                {selectedQuiz?.questions.map((question) => (
                    <li
                        key={question.id}
                        onClick={() => onQuestionClick(question)}
                        className={cn(
                            'flex items-center p-2 mb-2 space-x-2 border border-gray-200 cursor-pointer rounded',
                            {
                                'border-b-2 border-b-primary': question.id === selectedQuestion?.id,
                            }
                        )}
                    >
                        <DragIcon />
                        <p className="text-xs w-56 truncate">{question.title}</p>
                    </li>
                ))}
                <button className="border border-primary px-3 py-1 rounded hover:text-primary text-sm text-gray-700">
                    {strings.add_question}
                </button>
            </ul>
        </div>
    );
};
