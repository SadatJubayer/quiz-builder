import { appRoutes } from 'constant';
import HomePage from 'pages/user/home.page';
import { Route, Routes } from 'react-router-dom';

export const UserRouter = () => {
    return (
        <Routes>
            <Route path={appRoutes.USER_HOME} element={<HomePage />} />
        </Routes>
    );
};
