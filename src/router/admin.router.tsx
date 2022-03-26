import { appRoutes } from 'constant';
import { CreateQUizPage } from 'pages/admin/createQuiz.page';
import DashboardPage from 'pages/admin/dashboard.page';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const AdminRouter = () => {
    return (
        <Routes>
            <Route path={appRoutes.ADMIN_DASHBOARD} element={<DashboardPage />} />
            <Route path={appRoutes.QUIZ_EDITOR}>
                <Route path=":id" element={<CreateQUizPage />} />
            </Route>
        </Routes>
    );
};
