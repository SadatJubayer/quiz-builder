import { Navbar } from './Navbar';

interface ILayoutProps {
    user?: boolean;
    children: React.ReactNode;
}

export const Layout = ({ user = false, children }: ILayoutProps) => {
    const link = user ? '' : '/';

    return (
        <div className="bg-bg min-h-screen">
            <Navbar to={link} />
            <main className="p-3 md:p-5">{children}</main>
        </div>
    );
};
