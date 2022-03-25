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
            to={appRoutes.CREATE_QUIZ}
            className="bg-lightBg p-5 flex flex-col space-y-4 border border-gray-300 rounded"
        >
            <h2 className="text-lightText">{quiz.name}</h2>
            <div className="text-xs flex items-center justify-between">
                <p
                    className={`${
                        quiz.isPublished ? 'bg-primary' : 'bg-orange-400'
                    } text-white px-2 py-0.5 rounded`}
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
