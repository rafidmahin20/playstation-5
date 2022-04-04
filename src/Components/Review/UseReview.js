import { useEffect, useState } from 'react';

const UseReview = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setReview(data))
    }, []);
    return [reviews, setReview];
};

export default UseReview;