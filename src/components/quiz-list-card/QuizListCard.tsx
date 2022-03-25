import { appRoutes } from 'constant';
import { Link } from 'react-router-dom';

export const QuizListCard = () => {
    return (
        <Link
            to={appRoutes.CREATE_QUIZ}
            className="bg-lightBg p-5 flex flex-col space-y-4 border border-gray-300 rounded"
        >
            <h2 className="text-lightText">
                QuizListCard consectetur, adipisicing elit. Asperiores, quibusdam?
            </h2>
            <div className="text-xs flex items-center justify-between">
                <p className="bg-primary text-white px-2 py-0.5 rounded">Published</p>
                <p className="border-primary border border-opacity-20 text-primary px-2 py-0.5 rounded italic">
                    <b>35</b> questions
                </p>
            </div>
        </Link>
    );
};
