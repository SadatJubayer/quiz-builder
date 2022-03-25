import { Navbar } from './Navbar';

interface ILayoutProps {
    children: React.ReactNode;
}

export const Layout = (props: ILayoutProps) => {
    return (
        <div className="bg-bg min-h-screen">
            <Navbar />
            <main className="p-3 md:p-5">{props.children}</main>
        </div>
    );
};
