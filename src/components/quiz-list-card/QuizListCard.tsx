import cn from 'classnames';
import { appRoutes } from 'constant';
import { strings } from 'constant/strings';
import { Link } from 'react-router-dom';
import { IQuiz } from 'types/IQuiz';

interface IQuizListCard {
    quiz: IQuiz;
}

export const QuizListCard = ({ quiz }: IQuizListCard) => {
    return (
        <Link
            to={`${appRoutes.QUIZ_EDITOR}/${quiz.id}`}
            className="bg-lightBg p-5 flex flex-col space-y-4 border border-gray-300 rounded"
        >
            <h2 className="text-lightText">{quiz.name}</h2>
            <div className="text-xs flex items-center justify-between">
                <p
                    className={cn(
                        'text-white px-2 py-0.5 rounded',
                        { 'bg-green-600': quiz?.isPublished },
                        { 'bg-orange-800': !quiz?.isPublished }
                    )}
                >
                    {quiz.isPublished ? strings.published : strings.draft}
                </p>
                <p className="border-primary border border-opacity-20 text-primary px-2 py-0.5 rounded italic">
                    <b>{quiz.questions.length}</b> {strings.questions}
                </p>
            </div>
        </Link>
    );
};
