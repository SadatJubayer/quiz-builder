import { QuizListCard } from 'components';
import { LinkButton } from 'components/link-button/LinkButton';
import { appRoutes } from 'constant';
import { strings } from 'constant/strings';

const dummyList = [
    {
        id: 'aewrc',
        title: 'JavaScript Test',
    },
    {
        id: 'aewrcerwe',
        title: 'Python Test',
    },
];

export const QuizList = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <p className="text-text text-sm">{strings.your_quizzes} -</p>
                <LinkButton text={strings.create_new} to={appRoutes.CREATE_QUIZ} />
            </div>
            <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                {dummyList.map((quiz) => (
                    <QuizListCard key={quiz.id} />
                ))}
            </div>
        </div>
    );
};
