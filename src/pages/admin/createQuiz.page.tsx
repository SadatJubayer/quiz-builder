import { Layout } from 'components';
import { useParams } from 'react-router-dom';

export const CreateQUizPage = () => {
    const prams = useParams();
    console.log('prams', prams);

    return <Layout>Test page</Layout>;
};
