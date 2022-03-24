import { appRoutes } from 'constant';
import DashboardPage from 'pages/admin/dashboard.page';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const AdminRouter = () => {
    return (
        <Routes>
            <Route path={appRoutes.ADMIN_DASHBOARD} element={<DashboardPage />} />
        </Routes>
    );
};
