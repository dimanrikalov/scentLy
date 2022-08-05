import Loading from './Loading';
import endpoints from '../endpoints';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { useContext, useEffect, useState } from 'react';

export default function ReviewEditGuard() {
    const { user } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isReviewCreator, setIsReviewCreator] = useState(false);
    let fragranceId = window.location.pathname.slice(11);
    fragranceId = fragranceId.slice(0, fragranceId.indexOf('/'));

    useEffect(() => {
        fetch(`${endpoints.catalogUrl}/${fragranceId}/details`)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);
                setIsReviewCreator(
                    data.reviews.some(
                        (x) => x.author._id.toString() == user._id.toString()
                    )
                );
            })
            .catch(() => {
                setIsLoading(false);
                setIsReviewCreator(false);
            });
    }, []);

    if (isLoading) {
        return <Loading />;
    } else {
        if (isReviewCreator) {
            return <Outlet />;
        }

        return <Navigate to={`/fragrance/${fragranceId}/details`} replace />;
    }
}
