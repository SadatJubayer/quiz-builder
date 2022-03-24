import HomePage from 'pages/user/home.page';
import { Route, Routes } from 'react-router-dom';

export const UserRouter = () => {
    return (
        <Routes>
            <Route path="/user" element={<HomePage />} />
        </Routes>
    );
};
