import { BrowserRouter } from 'react-router-dom';
import { AdminRouter } from './admin.router';
import { UserRouter } from './user.router';

export const Router = () => {
    return (
        <BrowserRouter>
            <AdminRouter />
            <UserRouter />
        </BrowserRouter>
    );
};
