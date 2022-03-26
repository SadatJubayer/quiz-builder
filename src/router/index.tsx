import { appRoutes } from 'constant';
import { CreateQUizPage } from 'pages/admin/createQuiz.page';
import DashboardPage from 'pages/admin/dashboard.page';
import { FourOhFour } from 'pages/common/FourOhFour';
import HomePage from 'pages/user/home.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Admin Routes */}
                <Route path={appRoutes.ADMIN_DASHBOARD} element={<DashboardPage />} />
                <Route path={appRoutes.QUIZ_EDITOR}>
                    <Route path=":id" element={<CreateQUizPage />} />
                </Route>

                {/* User Routes */}
                <Route path={appRoutes.USER_HOME} element={<HomePage />} />

                {/* Other Routes */}
                <Route path={appRoutes.NOT_FOUND} element={<FourOhFour />} />
                <Route path="*" element={<FourOhFour />} />
            </Routes>
        </BrowserRouter>
    );
};
