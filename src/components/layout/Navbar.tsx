import { strings } from 'constant/strings';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="h-12 bg-lightBg shadow-sm flex justify-center items-center">
            <Link to="/" className="text-lightText hover:text-primary font-medium text-lg">
                {strings.appName}
            </Link>
        </nav>
    );
};
