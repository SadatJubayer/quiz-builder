import { Spinner } from 'components';
import { dummyData } from 'data/dummyData';
import { useAppDispatch, useAppState } from 'hooks';
import { useEffect } from 'react';
import { Router } from 'router';
import { initWithDummyData } from 'store/quizSlice';

export default function App() {
    const dispatch = useAppDispatch();
    const isLoading = useAppState((state) => state.quizzes.isLoading);

    useEffect(() => {
        /* Simulating delay for loading spinner */
        const timeOutId = setTimeout(() => {
            dispatch(initWithDummyData(dummyData));
        }, 2000);
        return () => {
            clearTimeout(timeOutId);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (isLoading) return <Spinner fullPage />;
    return <Router />;
}
