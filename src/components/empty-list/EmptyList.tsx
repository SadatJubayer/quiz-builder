import { EmptyListIcon } from 'assets/icons';
import { Button } from 'components';
import { appRoutes } from 'constant';
import { strings } from 'constant/strings';
import { Link } from 'react-router-dom';

export const EmptyList = () => {
    return (
        <div className="flex flex-col justify-center items-center py-16 lg:py-32 space-y-6">
            <EmptyListIcon />
            <p className="text-text">{strings.your_have_no_quiz}</p>
            <Link to={appRoutes.QUIZ_EDITOR}>
                <Button text={strings.create_new} />
            </Link>
        </div>
    );
};
